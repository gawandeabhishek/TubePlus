"use client";

import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "./search-bar";

export function ActivityHeader() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <h1 className="text-2xl font-bold">Your Activity</h1>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
        <SearchBar />
        <Button variant="ghost" size="icon" className="self-end sm:self-auto">
          <User className="h-5 w-5" />
          <span className="sr-only">User profile</span>
        </Button>
      </div>
    </div>
  );
}