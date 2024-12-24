"use client";

import { motion } from "framer-motion";
import { Home, Activity, Settings, Crown, User, Compass, MessageSquare } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const menuItems = [
  // { icon: User, label: "Profile", href: "/" },
  { icon: Compass, label: "Explore", href: "/explore" },
  { icon: MessageSquare, label: "Chat", href: "/chat" },
  { icon: Activity, label: "Activity", href: "/activity" },
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: Crown, label: "Premium Features", href: "/pricing" },
];

export function Sidebar({ isMobile }: { isMobile?: boolean }) {
  const pathname = usePathname();
  
  const asideClasses = isMobile 
    ? "w-full h-full bg-background" 
    : "w-64 p-4 bg-card sticky top-0 h-screen";

  return (
    <motion.aside 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className={asideClasses}
    >
      {!isMobile && (
        <div className="flex items-center gap-2 mb-8">
          <Home className="h-6 w-6" />
          <h1 className="font-semibold text-xl">Dashboard</h1>
        </div>
      )}
      
      <nav className="space-y-2 p-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-2 p-2 rounded-lg transition-colors",
                "hover:bg-accent/50",
                isActive && "bg-accent text-accent-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </motion.aside>
  );
}