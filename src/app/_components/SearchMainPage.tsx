"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SearchInput } from "./Input";
import { ChangeEvent, useState } from "react";
import { SearchResultList } from "./SearchResultList";
export const SearchMainPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="relative z-50">
      <SearchInput handleChange={handleChange} value={searchValue} />
      {searchValue && <SearchResultList searchValue={searchValue} />}
    </div>
  );
};
