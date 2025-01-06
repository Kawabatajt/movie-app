"use client";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import type { Movie } from "../page";
import Link from "next/link";
import { MovieCard } from "../_components/MovieCard";
import { ArrowRight } from "lucide-react";

import { Paginations } from "../_components/pagination";
import { totalmem } from "os";
type Props = {
  title: string;
  endpoint: string;
};
export type PageInfo = {
  totalPages: number;
  currentPage: number;
};
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
  },
};
export default function Page() {
  const params = useParams();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const [movies, setMovies] = useState<Movie[]>();
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    totalPages: 0,
    currentPage: 0,
  });
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `https:/api.themoviedb.org/3/movie/${params.Category}?language=en-US&page=${page}`,
        options
      );
      const data = await response.json();
      setMovies(data?.results?.slice(0, 10));
      setPageInfo({ currentPage: Number(page), totalPages: data?.total_pages });
    }
    fetchMovies();
  }, [params]);
  return (
    <div>
      <div className="flex justify-between py-[32px] px-[20px] text-[#09090B]">
        <h1 className="text-2xl font-semibold capitalize ">
          {params.Category}
        </h1>
      </div>
      <div className="grid grid-cols-2">
        {movies?.map((movie) => (
          <span key={movie.id}>
            <MovieCard movie={movie} />
          </span>
        ))}
      </div>
      <Paginations pageInfo={pageInfo} />
    </div>
  );
}
