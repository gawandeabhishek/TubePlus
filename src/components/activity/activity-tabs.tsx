"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = [
  { id: "playlists", label: "Playlists" },
  { id: "liked-videos", label: "Liked Videos" },
  { id: "watch-later", label: "Watch Later" },
  { id: "history", label: "History" },
];

export function ActivityTabs() {
  return (
    <Tabs defaultValue="playlists" className="mb-8">
      <TabsList className="mb-8 flex-wrap h-auto">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id} className="flex-1">
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}