"use client";

import { cn } from "@/lib/utils";

interface FilterTabsProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function FilterTabs({ filters, activeFilter, onFilterChange }: FilterTabsProps) {
  return (
    <div className="flex gap-3 overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={cn(
            "px-4 py-1.5 rounded-full text-sm whitespace-nowrap font-medium transition-colors",
            "hover:bg-secondary",
            activeFilter === filter ? "bg-secondary" : "bg-transparent"
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}