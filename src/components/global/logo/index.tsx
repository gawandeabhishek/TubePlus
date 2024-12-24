"use client";

import Link from "next/link";
import { LogoIcon } from "./logo-icon";

export function Logo() {
  return (
    <Link href="/explore" className="absolute left-2 flex items-center space-x-2">
      <LogoIcon />
      <span className="hidden lg:block font-bold text-xl">TubePlus</span>
    </Link>
  );
}