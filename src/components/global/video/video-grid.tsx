"use client";

import { Button } from "@/components/ui/button";
import { VideoCard } from "./video-card";
import type { Video } from "@/types/video";

interface VideoGridProps {
  videos: Video[];
  isLoading: boolean;
  error: string | null;
  hasMore: boolean;
  onLoadMore: () => void;
}

export function VideoGrid({ 
  videos, 
  isLoading, 
  error, 
  hasMore, 
  onLoadMore 
}: VideoGridProps) {
  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-destructive">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {videos.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
        {isLoading && [...Array(4)].map((_, i) => (
          <div key={`skeleton-${i}`} className="animate-pulse">
            <div className="aspect-video bg-muted rounded-lg mb-3" />
            <div className="flex gap-3">
              <div className="h-8 w-8 bg-muted rounded-full shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-muted rounded w-3/4" />
                <div className="h-3 bg-muted rounded w-1/2" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {hasMore && (
        <div className="flex justify-center">
          <Button
            onClick={onLoadMore}
            disabled={isLoading}
            variant="outline"
          >
            {isLoading ? "Loading..." : "Load More"}
          </Button>
        </div>
      )}
    </div>
  );
}