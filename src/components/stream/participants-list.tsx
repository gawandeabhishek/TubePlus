"use client"

import { Crown, Mic, MicOff } from "lucide-react"
import { motion } from "framer-motion"

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3 }
  }
}

export function ParticipantsList() {
  return (
    <div className="bg-card border-l border-border">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-card-foreground">Participants (8)</span>
        </div>
        <button className="h-6 w-6 flex items-center justify-center text-muted-foreground hover:text-card-foreground transition-colors">
          <span className="sr-only">Expand</span>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      <motion.div 
        className="p-2 space-y-1"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <motion.div 
          className="flex items-center gap-2 p-2 rounded hover:bg-secondary/50 transition-colors"
          variants={listItemVariants}
        >
          <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
            <span className="text-sm text-secondary-foreground">JH</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1">
              <span className="text-sm text-card-foreground">John Host</span>
              <Crown className="h-3 w-3 text-yellow-500" />
            </div>
            <div className="flex items-center gap-1">
              <Mic className="h-3 w-3 text-green-500" />
              <span className="text-xs text-muted-foreground">Speaking</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="flex items-center gap-2 p-2 rounded hover:bg-secondary/50 transition-colors"
          variants={listItemVariants}
        >
          <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
            <span className="text-sm text-secondary-foreground">SK</span>
          </div>
          <div className="flex-1">
            <span className="text-sm text-card-foreground">Sarah K.</span>
            <div className="flex items-center gap-1">
              <MicOff className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Muted</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}