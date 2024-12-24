"use client";

import { Heart, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import type { Video } from "@/types/video";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

type VideoCardProps = Video;

export function VideoCard({ 
  title, 
  channel, 
  views, 
  createdAt, 
  duration, 
  thumbnail, 
  avatarUrl 
}: VideoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden group cursor-pointer">
        <div className="relative aspect-video bg-muted">
          <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 rounded text-[10px] text-white">
            {duration}
          </div>
        </div>
        <div className="p-3">
          <div className="flex gap-3">
            <Avatar className="h-8 w-8 rounded-full shrink-0">
              <div className="h-full w-full bg-muted rounded-full" />
            </Avatar>
            <div className="min-w-0">
              <h3 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">{channel}</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <span>{views.toLocaleString()} views</span>
                <span>•</span>
                <span>{createdAt}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 mt-2">
            <button className="p-1.5 hover:bg-secondary rounded-full transition-colors">
              <Heart className="h-4 w-4" />
            </button>
            <button className="p-1.5 hover:bg-secondary rounded-full transition-colors">
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}