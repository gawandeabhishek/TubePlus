"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, ThumbsUp, ListVideo } from "lucide-react";

const sections = [
  {
    title: "Watch Later",
    icon: Clock,
    videos: [
      "Advanced JavaScript Concepts",
      "React Performance Tips",
      "Next.js 14 Tutorial",
    ],
  },
  {
    title: "Liked Videos",
    icon: ThumbsUp,
    videos: [
      "CSS Grid Masterclass",
      "TypeScript Best Practices",
      "UI Design Principles",
    ],
  },
  {
    title: "Playlists",
    icon: ListVideo,
    videos: [
      "Web Development Basics",
      "Frontend Framework Comparison",
      "Backend Development",
    ],
  },
];

export function RightSidebar() {
  return (
    <motion.aside
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-72 lg:w-80 p-4 bg-card sticky top-0 h-screen overflow-hidden"
    >
      <ScrollArea className="h-[calc(100vh-2rem)]">
        {sections.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: sectionIndex * 0.1 }}
            className="mb-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <section.icon className="h-5 w-5" />
              <h2 className="font-semibold">{section.title}</h2>
            </div>
            <div className="space-y-2">
              {section.videos.map((video, index) => (
                <Card
                  key={index}
                  className="p-3 hover:bg-accent/50 cursor-pointer transition-colors"
                >
                  <div className="flex gap-3">
                    <div className="w-20 lg:w-24 h-12 lg:h-14 bg-muted rounded shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium line-clamp-2">{video}</p>
                      <p className="text-xs text-muted-foreground">
                        Added {index + 1}d ago
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        ))}
      </ScrollArea>
    </motion.aside>
  );
}