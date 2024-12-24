"use client"

import { Play, Volume2, Subtitles, Settings, Maximize2 } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function StreamContent() {
  return (
    <div className="relative w-full h-full bg-black">
      <motion.div 
        className="absolute bottom-0 left-0 right-0 p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <h2 className="text-lg text-card-foreground font-medium">Movie Night: Inception (2025)</h2>
            <span className="text-sm text-muted-foreground">Started 45 minutes ago</span>
          </div>
          <div>
            <div className="w-full h-1 bg-secondary rounded-full">
              <motion.div 
                className="h-full bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "45%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-card-foreground hover:text-muted-foreground">
                <Play className="h-5 w-5" />
              </Button>
              <span className="text-sm text-card-foreground">1:15:30 / 2:28:00</span>
            </div>
            <div className="flex items-center gap-4">
              {[Volume2, Subtitles, Settings, Maximize2].map((Icon, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="text-card-foreground hover:text-muted-foreground"
                >
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}