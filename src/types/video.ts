export interface Video {
    id: string;
    title: string;
    channel: string;
    views: number;
    createdAt: string;
    duration: string;
    thumbnail: string;
    avatarUrl: string;
  }
  
  export interface VideoResponse {
    videos: Video[];
    hasMore: boolean;
    total: number;
  }
  
  export interface VideoFilters {
    category?: string;
    search?: string;
    page?: number;
    limit?: number;
  }