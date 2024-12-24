"use client"

import { Share2, User, Youtube } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LogoIcon } from "../global/logo/logo-icon"

export function StreamHeader() {
  return (
    <motion.div 
      className="flex items-center justify-between p-4 bg-card border-b border-border"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Link href="/" className="flex items-center space-x-2">
        {/* WIP: change icon to logo icon */}
          {/* <Youtube className="h-6 w-6" /> */}
          <LogoIcon />
          <span className="hidden md:block font-bold text-xl">TubePlus</span>
        </Link>
        
      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          size="sm"
          className="hidden sm:flex items-center gap-2"
        >
          <Share2 className="h-4 w-4" />
          Share Stream
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="sm:hidden"
        >
          <Share2 className="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
        >
          <User className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  )
}