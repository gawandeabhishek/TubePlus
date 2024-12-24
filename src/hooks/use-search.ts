"use client";

import { useState, useCallback } from 'react';
import { useDebounce } from './use-debounce';

export function useSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 500);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  return {
    searchQuery: debouncedSearch,
    handleSearch,
  };
}