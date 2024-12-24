"use client";

import { useState, useEffect } from 'react';
import { mockVideos } from '@/data/mock-videos';
import type { Video, VideoFilters } from '@/types/video';

export function useVideos(filters: VideoFilters = {}) {
  const [filteredVideos, setFilteredVideos] = useState<Video[]>(mockVideos);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API delay
    const timer = setTimeout(() => {
      let results = [...mockVideos];
      
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        results = results.filter(video => 
          video.title.toLowerCase().includes(searchTerm) ||
          video.channel.toLowerCase().includes(searchTerm)
        );
      }
      
      if (filters.category && filters.category !== 'All') {
        results = results.filter(video => 
          video.title.toLowerCase().includes(filters.category!.toLowerCase())
        );
      }
      
      setFilteredVideos(results);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [filters.search, filters.category]);

  return {
    videos: filteredVideos,
    isLoading,
    error: null,
    hasMore: false, // Disabled for mock data
    loadMore: () => {}, // No-op for mock data
  };
}