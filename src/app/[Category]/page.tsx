"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import type { Movie } from "../page";
import Link from "next/link";
import { MovieCard } from "../_components/MovieCard";
import { ArrowRight } from "lucide-react";
type Props = {
  title: string;
  endpoint: string;
};
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
  },
};
export default async function Section() {
  const params = useParams();
  const [movies, setMovies] = useState<Movie[]>();
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `https:/api.themoviedb.org/3/movie/${params.category}?language=en-US&page=1`,
        options
      );
      const resJson = await response.json();
      setMovies(resJson.results);
    }
    fetchMovies();
  }, []);
  return (
    <div>
      {/* <div className="flex justify-between py-[32px] px-[20px] text-[#09090B]">
        <h1 className="text-2xl font-semibold ">{params.category}</h1>
      </div>
      <div className="grid grid-cols-2">
        {movies?.map((movie) => (
          <span key={movie.id}>
            <MovieCard movie={movie} />
          </span>
        ))}
      </div> */}
    </div>
  );
}
