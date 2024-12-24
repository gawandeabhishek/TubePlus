"use client";

import { Search, Loader2 } from "lucide-react";
import { Input } from "../ui/input";
import { useState, useCallback } from "react";

interface SearchInputProps {
  onSearch: (query: string) => void;
  isSearching: boolean;
  className?: string;
}

export function SearchInput({ onSearch, isSearching, className }: SearchInputProps) {
  const [value, setValue] = useState("");

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onSearch(newValue);
  }, [onSearch]);

  return (
    <div className="relative sm:flex-1 mr-4 sm:mr-0">
      {isSearching ? (
        <Loader2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground animate-spin" />
      ) : (
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      )}
      <Input 
        value={value}
        onChange={handleChange}
        placeholder="Search videos, channels, or playlists" 
        className={`pl-10 w-[90%] sm:w-full bg-background ${className}`}
      />
    </div>
  );
}