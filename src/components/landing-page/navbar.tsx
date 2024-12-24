"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoIcon } from "../global/logo/logo-icon";

type TypeOfPage = "landing" | "pricing" | "landing & pricing";

type NavItemsProps = {
  label: string;
  href: string;
  type: TypeOfPage;
};

const navItems: NavItemsProps[] = [
  { label: "Features", href: "#features", type: "landing" },
  { label: "How it Works", href: "#how-it-works", type: "landing" },
  { label: "Pricing", href: "#pricing", type: "landing" },
  { label: "Pricing", href: "#pricing", type: "pricing" },
  { label: "Premium Features", href: "#premium-features", type: "pricing" },
  { label: "FAQ", href: "#faq", type: "pricing" },
];

export function Navbar() {
  const pathname = usePathname(); // Get the current pathname

  // Determine the type of page based on the pathname
  const pageType = () => {
    if (pathname === "/") {
      return "landing";
    } else if (pathname === "/pricing") {
      return "pricing";
    }
    return "landing"; // Default to "landing" if no specific match
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b"
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          {/* WIP: change icon to logo icon */}
          {/* <Youtube className="h-6 w-6" /> */}
          <LogoIcon />
          <span className="hidden md:block font-bold text-xl">TubePlus</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(
            (item, key) =>
              item.type === pageType() && (
                <Link
                  key={key}
                  href={item.href}
                  className="text-sm font-medium hover:text-primary"
                >
                  {item.label}
                </Link>
              )
          )}
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard">Log in</Link>
          </Button>

          <Button size="sm" asChild>
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}
