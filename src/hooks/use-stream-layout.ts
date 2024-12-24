"use client"

import { useState, useCallback } from "react"

export function useStreamLayout() {
  const [isChatVisible, setIsChatVisible] = useState(false)

  const toggleChat = useCallback(() => {
    setIsChatVisible(prev => !prev)
  }, [])

  return {
    isChatVisible,
    toggleChat
  }
}