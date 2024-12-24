"use client";

import Link from "next/link";
import { LogoIcon } from "./logo-icon";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
}

export function Logo({ className }: Props) {
  return (
    <Link href="/explore" className={cn("flex items-center space-x-2", className)}>
      <LogoIcon />
      <span className="hidden lg:block font-bold text-xl">TubePlus</span>
    </Link>
  );
}