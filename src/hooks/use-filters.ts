"use client";

import { useState } from 'react';

const defaultFilters = ["All", "Gaming", "Music", "Live", "News", "Sports", "Learning"];

export function useFilters() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filters] = useState(defaultFilters);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  return {
    filters,
    activeFilter,
    handleFilterChange,
  };
}