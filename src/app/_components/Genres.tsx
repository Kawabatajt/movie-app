"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
type Genre = {
  name: string;
};
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
  },
};
export const Genres = ({
  onChange,
  genreId,
}: {
  onChange: () => void;
  genreId: string;
}) => {
  const [genres, setGenres] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    const FetchGenre = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?language=en",
        options
      );
      const data = await response.json();
      setGenres(data.genres);
      console.log(data);
    };
    FetchGenre();
  }, []);
  return (
    <div>
      {genres?.map((genre) => (
        <Link
          onClick={onChange}
          key={`genres-${genre.id}`}
          href={`/search?with_genres=${genre.id}`}
        >
          <Badge
            variant="outline"
            className={`${
              Number(genreId) === genre.id ? "font-bold" : "font-normal"
            }`}
          >
            {genre.name}
          </Badge>
        </Link>
      ))}
    </div>
  );
};
