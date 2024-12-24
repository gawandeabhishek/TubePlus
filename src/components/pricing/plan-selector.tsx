"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function PlanSelector() {
  const [billing, setBilling] = React.useState("monthly");

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center mt-8 space-y-4"
    >
      <div className="bg-muted rounded-full p-1.5 shadow-lg">
        <ToggleGroup 
          type="single" 
          value={billing} 
          onValueChange={(value) => value && setBilling(value)}
          className="relative flex items-center bg-transparent"
        >
          <ToggleGroupItem 
            value="monthly" 
            className="text-xs sm:text-base relative z-10 rounded-full px-6 sm:px-8 py-3 data-[state=on]:bg-white data-[state=on]:text-primary data-[state=on]:shadow-md transition-all duration-200"
            aria-label="Monthly billing"
          >
            Monthly
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="yearly" 
            className="text-xs sm:text-base relative z-10 rounded-full px-6 sm:px-8 py-3 data-[state=on]:bg-white data-[state=on]:text-primary data-[state=on]:shadow-md transition-all duration-200"
            aria-label="Yearly billing"
          >
            <span className="flex items-center gap-2">
              Yearly
              <span className="inline-flex items-center justify-center bg-green-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
                20% OFF
              </span>
            </span>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </motion.div>
  );
}