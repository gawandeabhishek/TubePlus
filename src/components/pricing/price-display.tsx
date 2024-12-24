"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface PriceDisplayProps {
  price: number;
}

export function PriceDisplay({ price }: PriceDisplayProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest * 100) / 100);
  const display = useTransform(rounded, latest => `$${latest.toFixed(2)}`);

  useEffect(() => {
    const controls = animate(count, price, {
      duration: 1,
      ease: "easeOut"
    });
    return controls.stop;
  }, [count, price]);

  return <motion.span>{display}</motion.span>;
}