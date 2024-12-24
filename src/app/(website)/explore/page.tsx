"use client"

import { FilterTabs } from "@/components/explore/filter-tabs";
import { SearchBar } from "@/components/explore/search-bar";
import { VideoGrid } from "@/components/global/video/video-grid";
import { useFilters } from "@/hooks/use-filters";
import { useSearch } from "@/hooks/use-search";
import { useVideos } from "@/hooks/use-videos";

export default function ExplorePage() {
  const { searchQuery, handleSearch } = useSearch();
  const { filters, activeFilter, handleFilterChange } = useFilters();
  
  const { 
    videos, 
    isLoading, 
    error, 
    hasMore, 
    loadMore 
  } = useVideos({
    search: searchQuery,
    category: activeFilter,
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="relative container mx-auto px-4 py-3">
          <SearchBar onSearch={handleSearch} isSearching={isLoading} />
        </div>
      </div>

      <div className="border-b bg-background">
        <div className="container mx-auto px-4 py-2">
          <FilterTabs 
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <VideoGrid 
          videos={videos}
          isLoading={isLoading}
          error={error}
          hasMore={hasMore}
          onLoadMore={loadMore}
        />
      </div>
    </div>
  );
}