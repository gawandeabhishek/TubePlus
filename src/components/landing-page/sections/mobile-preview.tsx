"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Apple, PlayCircle } from "lucide-react";

export function MobilePreview() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Take TubePlus Anywhere
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Download our mobile app to enjoy synchronized video watching, group chats, and more on the go.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="flex items-center gap-2">
                <Apple className="h-5 w-5" />
                App Store
              </Button>
              <Button className="flex items-center gap-2">
                <PlayCircle className="h-5 w-5" />
                Play Store
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-transparent" />
            <Image
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80"
              alt="Mobile App Preview"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}