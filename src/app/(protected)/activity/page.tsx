"use client";

import { ActivityHeader } from "@/components/activity/activity-header";
import { ActivityTabs } from "@/components/activity/activity-tabs";
import { Footer } from "@/components/global/footer/footer";
import { PlaylistGrid } from "@/components/activity/playlist-grid";
import { motion } from "framer-motion";

export default function ActivityPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8"
    >
      <ActivityHeader />
      <ActivityTabs />
      <PlaylistGrid />
      <Footer />
    </motion.div>
  );
}