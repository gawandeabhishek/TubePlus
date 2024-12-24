"use client"

import { motion, AnimatePresence } from "framer-motion"
import { StreamHeader } from "./stream-header"
import { StreamContent } from "./stream-content"
import { StreamChat } from "./stream-chat"
import { ParticipantsList } from "./participants-list"
import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"
import { StreamControls } from "./stream-controls"
import { useStreamLayout } from "@/hooks/use-stream-layout"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 }
  }
}

const sidebarVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  exit: {
    x: "100%",
    opacity: 0
  }
}

export function StreamContainer() {
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  const isLandscape = useMediaQuery("(orientation: landscape)")
  const isMobile = useMediaQuery("(max-width: 767px)")
  const { isChatVisible, toggleChat } = useStreamLayout()

  const showHeader = isDesktop || (!isLandscape && !isMobile)
  const showSidebar = isDesktop || (isLandscape && isChatVisible)

  return (
    <motion.div 
      className={cn(
        "h-screen flex flex-col bg-background",
        isLandscape && !isDesktop && "landscape:h-[100dvh]"
      )}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {showHeader && <StreamHeader />}
      </AnimatePresence>
      
      <div className="flex-1 flex relative overflow-hidden">
        <motion.div 
          className={cn(
            "flex-1 flex flex-col min-w-0",
            showSidebar && "lg:w-[calc(100%-320px)]",
            isLandscape && !isDesktop && isChatVisible && "w-[60%]"
          )}
          layout
        >
          <div className="flex-1">
            <StreamContent />
          </div>
          <StreamControls 
            isDesktop={isDesktop}
            isLandscape={isLandscape}
            isChatVisible={isChatVisible}
            onToggleChat={toggleChat}
          />
        </motion.div>

        <AnimatePresence mode="wait">
          {showSidebar && (
            <motion.div 
              className={cn(
                "flex flex-col h-full",
                isDesktop ? "w-[320px]" : "w-[40%]"
              )}
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
            >
              <ParticipantsList />
              <StreamChat />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}