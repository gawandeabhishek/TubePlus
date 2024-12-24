"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { Users, MessageSquare, Video, Crown } from "lucide-react";

export const features = [
  {
    title: "Watch Together",
    description:
      "Experience synchronized video watching with friends in real-time. Perfect for movie nights and study groups.",
    image:
      "https://images.unsplash.com/photo-1522158637959-30385a09e0da?auto=format&fit=crop&q=80&w=500",
    icon: <Users className="h-7 w-7 text-white" />,
  },
  {
    title: "Group Chat",
    description:
      "Engage in lively discussions with integrated chat while watching videos together.",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=500",
    icon: <MessageSquare className="h-7 w-7 text-white" />,
  },
  {
    title: "Share Reels",
    description:
      "Create, share, and discover short-form content that captures moments worth sharing.",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=500",
    icon: <Video className="h-7 w-7 text-white" />,
  },
  {
    title: "Premium Features",
    description:
      "Unlock exclusive features and unlimited access to enhance your viewing experience.",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=500",
    icon: <Crown className="h-7 w-7 text-white" />,
  },
];

export function Hero() {
  return (
    <section className="pt-32 pb-24 px-4">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight pb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Bring YouTube to Life – Learn, Share, Enjoy!
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground mb-8">
            Experience a smarter way to watch and share YouTube content with our
            enhanced platform. Create custom playlists, collaborate with
            friends, and discover new content.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  index: number;
}

export function FeatureCard({
  title,
  description,
  image,
  icon,
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl bg-card shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
    >
      <div className="aspect-video relative">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-90")} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full bg-white/10 p-4 backdrop-blur-md transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
            {icon}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 transform transition-transform duration-300 group-hover:translate-x-1">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
