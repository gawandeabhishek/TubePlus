"use client";

import { motion } from "framer-motion";
import { Rocket, Headphones, Lock } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Ad-free Experience",
    description: "Enjoy uninterrupted access to all content"
  },
  {
    icon: Headphones,
    title: "Priority Support",
    description: "Get help when you need it most"
  },
  {
    icon: Lock,
    title: "Enhanced Security",
    description: "Advanced protection for your data"
  }
];

export function PremiumFeatures() {
  return (
    <section id="premium-features" className="text-center space-y-12 pt-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold"
      >
        Unlock Premium Features
      </motion.h2>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="space-y-4"
          >
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-xl">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}