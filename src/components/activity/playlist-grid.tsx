"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaylistCard } from "./playlist-card";

const playlists = [
  { id: 1, title: "Favorite Music Videos", videoCount: 24 },
  { id: 2, title: "Gaming Highlights", videoCount: 15 },
  { id: 3, title: "Cooking Tutorials", videoCount: 8 },
];

export function PlaylistGrid() {
  return (
    <section className="mb-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Your Playlists</h2>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Playlist
        </Button>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
      >
        {playlists.map((playlist) => (
          <PlaylistCard
            key={playlist.id}
            title={playlist.title}
            videoCount={playlist.videoCount}
          />
        ))}
      </motion.div>
    </section>
  );
}