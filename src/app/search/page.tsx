"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MovieCard } from "../_components/MovieCard";
import type { Movie } from "../page";
import { Genres } from "../_components/Genres";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
  },
};
export default function GenrePage() {
  const [movies, setMovies] = useState();
  const searchParams = useSearchParams();
  const genreId = searchParams.get("with_genres");
  useEffect(() => {
    const fetchGenre = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&language=en-US&page=1`,
        options
      );
      const movieGenre = await response.json();
      setMovies(movieGenre?.results);
    };
    fetchGenre();
  }, [genreId]);
  return (
    <div>
      <div>
        <Genres genreId={genreId} />
      </div>
      <div className="grid grid-cols-2">
        {movies?.map((movie: Movie) => {
          return (
            <div key={`movie-${movie.id}`}>
              <MovieCard movie={movie} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
