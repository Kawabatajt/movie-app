"use client";

import { Input } from "@/components/ui/input";
import { PlayCircle } from "lucide-react";
import { ChangeEvent } from "react";

type SearchInputProps = {
  value: string;
  handleChange: (_event: ChangeEvent<HTMLInputElement>) => void;
};
export const SearchInput = ({ value, handleChange }: SearchInputProps) => {
  return (
    <Input
      type="text"
      value={value}
      placeholder="search"
      onChange={handleChange}
    />
  );
};
