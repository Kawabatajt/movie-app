"use client";
import { SearchInput } from "./Input";
import { ChangeEvent, useState } from "react";
import { options } from "../[Category]/page";
import { Movie } from "../page";
import { useEffect } from "react";
import Link from "next/link";

type SearchResultListProps = {
  searchValue: string;
};
export const SearchResultList = ({ searchValue }: SearchResultListProps) => {
  const [movies, setMovies] = useState<Movie[]>();
  useEffect(() => {
    const FetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=1`,
        options
      );
      const data = await response.json();
      setMovies(data?.results?.slice(0, 10));
    };
    FetchMovies();
  }, [searchValue]);
  return (
    <div className="absolute">
      {!movies ? (
        <p>Loading ...</p>
      ) : (
        <>
          <div className="p-3">
            {movies.map((movie) => (
              <Link href={`/movie/${movie.id}`} key={movie.id}>
                <div>{movie.title}</div>
              </Link>
            ))}
          </div>
          <Link href={`/search?query=${searchValue}`}>
            <div className="p-3 pt-0">
              See all the result for &#34;{searchValue}&#34;
            </div>
          </Link>
        </>
      )}
    </div>
  );
};
