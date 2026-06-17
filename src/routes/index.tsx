import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InfoTab } from "@/components/tabs/InfoTab";
import { LearningTab } from "@/components/tabs/LearningTab";
import { ComingSoonTab } from "@/components/tabs/ComingSoonTab";
import type { TabKey } from "@/lib/tabs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tiếng Việt Online — Học tiếng Việt cùng Trâu con đội nón lá" },
      {
        name: "description",
        content:
          "Hành trình học tiếng Việt vui nhộn dành cho trẻ em kiều bào 5–12 tuổi, dưới sự bảo trợ của UBNVONN – Bộ Ngoại giao.",
      },
      { property: "og:title", content: "Tiếng Việt Online" },
      {
        property: "og:description",
        content:
          "Vui học Tiếng Việt cùng Trâu con đội nón lá — 8 chủ đề, 40 chặng học dành cho trẻ em kiều bào.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [tab, setTab] = useState<TabKey>("info");

  return (
    <div className="flex min-h-screen flex-col pt-3">
      <Navbar active={tab} onChange={setTab} />

      <main className="flex-1 transition-all duration-300">
        <div key={tab} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
          {tab === "info" && <InfoTab />}
          {tab === "learn" && <LearningTab />}
          {tab === "kids" && <ComingSoonTab />}
        </div>
      </main>

      <Footer />
    </div>
  );
}
