"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlayCircle, Users, List, UserPlus } from "lucide-react";

const stats = [
  { icon: PlayCircle, label: "Videos Watched", value: "247" },
  { icon: List, label: "Playlists", value: "12" },
  { icon: Users, label: "Friends", value: "89" },
  { icon: UserPlus, label: "Groups", value: "5" },
];

export function MainContent() {
  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-8"
      >
        <h1 className="text-2xl md:text-4xl font-bold mb-2">Welcome, John Doe!</h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Your favorite videos, playlists, and interactions – all in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <Button className="w-full sm:w-auto">Explore Premium Features</Button>
          <Button variant="outline" className="w-full sm:w-auto">Update Profile</Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8"
      >
        {stats.map((stat, index) => (
          <Card key={index} className="p-3 md:p-4">
            <div className="flex flex-col items-center">
              <stat.icon className="h-6 w-6 md:h-8 md:w-8 mb-2 text-primary" />
              <span className="text-xl md:text-2xl font-bold">{stat.value}</span>
              <span className="text-xs md:text-sm text-muted-foreground text-center">{stat.label}</span>
            </div>
          </Card>
        ))}
      </motion.div>

      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-3 md:space-y-4">
          {[...Array(3)].map((_, index) => (
            <Card key={index} className="p-3 md:p-4">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-24 md:w-32 h-16 md:h-20 bg-muted rounded-md shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm md:text-base">Video Title {index + 1}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Watched {index + 1} days ago
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </motion.section>
    </div>
  );
}