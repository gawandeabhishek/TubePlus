"use client";

import { User } from "lucide-react";
import { Logo } from "../global/logo";
import { SearchInput } from "./search-input";

interface SearchBarProps {
  onSearch: (query: string) => void;
  isSearching: boolean;
}

export function SearchBar({ onSearch, isSearching }: SearchBarProps) {
  return (
    <div className="flex items-center justify-end sm:justify-center max-w-2xl mx-auto">
      <Logo className="absolute left-4" />
      <SearchInput onSearch={onSearch} isSearching={isSearching} />
      <User className="absolute right-4" />
    </div>
  );
}