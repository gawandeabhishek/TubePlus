"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface PlaylistCardProps {
  title: string;
  videoCount: number;
  thumbnail?: string;
}

export function PlaylistCard({ title, videoCount, thumbnail }: PlaylistCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="group relative rounded-lg overflow-hidden bg-gray-900 shadow-lg"
    >
      <AspectRatio ratio={16/9}>
        <div 
          className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors"
          style={{
            backgroundImage: thumbnail ? `url(${thumbnail})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <PlayCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-12 text-white opacity-80 group-hover:opacity-100" />
        </div>
      </AspectRatio>
      <div className="p-4">
        <h3 className="text-lg font-medium text-white line-clamp-1">{title}</h3>
        <p className="text-sm text-gray-400">{videoCount} videos</p>
      </div>
    </motion.div>
  );
}