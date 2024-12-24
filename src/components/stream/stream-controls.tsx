"use client"

import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

interface StreamControlsProps {
  isDesktop: boolean
  isLandscape: boolean
  isChatVisible: boolean
  onToggleChat: () => void
}

export function StreamControls({
  isDesktop,
  isLandscape,
  isChatVisible,
  onToggleChat
}: StreamControlsProps) {
  return (
    <motion.div 
      className="p-4 bg-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center gap-2">
        <Button variant="secondary" size="sm" className="shrink-0">
          React
        </Button>
        <Button variant="secondary" size="sm" className="shrink-0">
          Create Poll
        </Button>
        {!isDesktop && (
          <Button 
            variant={isChatVisible ? "default" : "secondary"}
            size="sm"
            className="ml-auto shrink-0"
            onClick={onToggleChat}
          >
            <MessageSquare className="h-4 w-4" />
            <span className="sr-only">Toggle chat</span>
          </Button>
        )}
      </div>
    </motion.div>
  )
}