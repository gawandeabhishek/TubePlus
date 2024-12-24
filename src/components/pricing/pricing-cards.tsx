"use client";

import { motion } from "framer-motion";
import { plans } from "./data";
import { PricingCard } from "./card";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface PricingCardsProps {
  billing: "monthly" | "yearly";
}
export function PricingCards({ billing }: PricingCardsProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-8"
    >
      {plans.map((plan) => (
        <PricingCard
          key={plan.name}
          plan={plan}
          billing={billing}
        />
      ))}
    </motion.div>
  );
}