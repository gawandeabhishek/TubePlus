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
    <div className="flex items-center justify-end sm:justify-normal gap-4 max-w-2xl mx-auto">
      <Logo />
      <SearchInput onSearch={onSearch} isSearching={isSearching} />
      <User className="ml-auto absolute right-2" />
    </div>
  );
}