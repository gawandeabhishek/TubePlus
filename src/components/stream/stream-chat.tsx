"use client"

import { Settings } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const chatVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 }
  }
}

export function StreamChat() {
  return (
    <motion.div 
      className="flex-1 flex flex-col min-h-0 bg-card border-l border-t border-border"
      variants={chatVariants}
    >
      <div className="p-4 border-b border-border flex items-center justify-between">
        <span className="text-sm font-medium text-card-foreground">Stream Chat</span>
        <Button variant="ghost" size="icon">
          <Settings className="h-4 w-4" />
          <span className="sr-only">Settings</span>
        </Button>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          <motion.div 
            className="flex items-start gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
              <span className="text-sm font-medium text-secondary-foreground">M</span>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-card-foreground">Mike</span>
                <span className="text-xs text-muted-foreground">10:45 PM</span>
              </div>
              <p className="text-sm text-card-foreground break-words">This scene is amazing! 🎬</p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Type a message..."
            className="flex-1"
          />
          <Button>Send</Button>
        </div>
      </div>
    </motion.div>
  )
}