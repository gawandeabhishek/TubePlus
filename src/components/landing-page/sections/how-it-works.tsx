"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, LogIn, Users, Video } from "lucide-react";

const steps = [
  {
    icon: LogIn,
    title: "Sign Up",
    description: "Connect with your YouTube account securely",
  },
  {
    icon: Video,
    title: "Create Watch Party",
    description: "Start a synchronized viewing session",
  },
  {
    icon: Users,
    title: "Invite Friends",
    description: "Share invite links via WhatsApp or Telegram",
  },
  {
    icon: ArrowRight,
    title: "Watch Together",
    description: "Enjoy real-time synchronized playback",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with TubePlus in just a few simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="relative h-full">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <step.icon className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}