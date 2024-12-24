"use client";

import { motion } from "framer-motion";
import { 
  User, 
  Lock, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  HelpCircle,
  Menu 
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const menuItems = [
  { icon: User, label: "Profile", href: "#profile" },
  { icon: Lock, label: "Account", href: "#account" },
  { icon: Bell, label: "Notifications", href: "#notifications" },
  { icon: Shield, label: "Privacy", href: "#privacy" },
  { icon: Palette, label: "Appearance", href: "#appearance" },
  { icon: Globe, label: "Language & Region", href: "#language" },
  { icon: HelpCircle, label: "Help & Support", href: "#support" },
];

function NavigationItems({ className }: { className?: string }) {
  const pathname = usePathname();
  
  return (
    <nav className={cn("space-y-2", className)}>
      {menuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
            "hover:bg-accent hover:text-accent-foreground",
            pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
          )}
        >
          <item.icon className="h-4 w-4" />
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export default function SettingsSidebar() {
  return (
    <>
      {/* Mobile Navigation */}
      <div className="sticky top-0 z-40 bg-background md:hidden">
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-semibold">Settings</h2>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] p-4">
              <NavigationItems className="mt-4" />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:block sticky top-[88px] self-start bg-card rounded-lg p-4 shadow-sm"
      >
        <NavigationItems />
      </motion.div>
    </>
  );
}