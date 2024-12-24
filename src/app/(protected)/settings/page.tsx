"use client";

import { motion } from "framer-motion";
import SettingsSidebar from "@/components/settings/settings-sidebar";
import ProfileSection from "@/components/settings/profile-section";
import PasswordSection from "@/components/settings/password-section";
import NotificationSection from "@/components/settings/notification-section";
import PrivacySection from "@/components/settings/privacy-section";
import DangerZone from "@/components/settings/danger-zone";
import { Footer } from "@/components/global/footer/footer";

export default function SettingsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen bg-background pb-16"
    >
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4">
          <div className="hidden md:block py-8">
            <h1 className="text-3xl font-bold text-foreground">
              Account Settings
            </h1>
            <p className="text-muted-foreground">
              Manage your account and preferences effortlessly
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 container px-4 py-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
          <SettingsSidebar />
          <main className="space-y-8 pt-4 md:pt-8">
            <ProfileSection />
            <PasswordSection />
            <NotificationSection />
            <PrivacySection />
            <DangerZone />
          </main>
        </div>

      </motion.div>
      <Footer />
    </motion.div>
  );
}
