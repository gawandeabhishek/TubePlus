"use client";

import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function VideoStream() {
  return (
    <div className="w-80 border-l p-4">
      <h2 className="font-semibold mb-4">Currently Watching</h2>

      <div className="aspect-video rounded-lg overflow-hidden bg-muted mb-4 relative">
        <Image
          src="https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&auto=format&fit=crop&q=60"
          alt="Active stream"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <span className="text-white font-medium">Active Video Stream</span>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <Users className="h-4 w-4" />
        <span className="text-sm text-muted-foreground">3 watching</span>
      </div>

      <Button className="w-full" asChild>
        <Link href="/stream">Join Stream</Link>
      </Button>
    </div>
  );
}
