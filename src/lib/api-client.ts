import { VideoResponse } from "@/types/video";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

class ApiClient {
  private async fetch<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
  }

  async getVideos(params: URLSearchParams): Promise<VideoResponse> {
    return this.fetch<VideoResponse>(`/videos?${params.toString()}`);
  }

  async searchVideos(query: string, params: URLSearchParams): Promise<VideoResponse> {
    return this.fetch<VideoResponse>(`/videos/search?q=${query}&${params.toString()}`);
  }
}

export const apiClient = new ApiClient();