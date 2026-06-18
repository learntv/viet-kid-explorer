// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { existsSync } from "node:fs";
import { dirname, relative, resolve } from "node:path";
import type { Plugin } from "vite";

const ASSET_POINTER_SUFFIX = ".asset.json";

function staleAssetPointerFallback(): Plugin {
  const virtualPrefix = "\0stale-asset-pointer:";
  let projectRoot = process.cwd();

  const toRealAssetPath = (source: string, importer?: string) => {
    const realAsset = source.slice(0, -ASSET_POINTER_SUFFIX.length);
    const candidates = [
      realAsset.startsWith("@/") ? resolve(projectRoot, "src", realAsset.slice(2)) : undefined,
      realAsset.startsWith("/src/") ? resolve(projectRoot, realAsset.slice(1)) : undefined,
      realAsset.startsWith("src/") ? resolve(projectRoot, realAsset) : undefined,
      realAsset.startsWith(".") && importer ? resolve(dirname(importer), realAsset) : undefined,
    ].filter(Boolean) as string[];

    return candidates.find((candidate) => existsSync(candidate));
  };

  return {
    name: "stale-asset-pointer-fallback",
    enforce: "pre",
    configResolved(config) {
      projectRoot = config.root;
    },
    resolveId(source, importer) {
      if (!source.endsWith(ASSET_POINTER_SUFFIX)) return null;

      const realAssetPath = toRealAssetPath(source, importer);
      return realAssetPath ? `${virtualPrefix}${realAssetPath}` : null;
    },
    load(id) {
      if (!id.startsWith(virtualPrefix)) return null;

      const realAssetPath = id.slice(virtualPrefix.length);
      const assetUrl = `/${relative(projectRoot, realAssetPath).replaceAll("\\", "/")}`;
      return `export default ${JSON.stringify(assetUrl)};`;
    },
  };
}

export default defineConfig({
  vite: {
    plugins: [staleAssetPointerFallback()],
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
