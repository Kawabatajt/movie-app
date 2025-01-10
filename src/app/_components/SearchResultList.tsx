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

export const SearchResultList = (
  { searchValue }: SearchResultListProps,
  handleFocus
) => {
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
  console.log(movies);
  return (
    <div className="absolute bg-background">
      {!movies ? (
        <p>Loading ...</p>
      ) : (
        <>
          <div className="p-3">
            {movies.map((movie) => (
              <Link
                href={`/movie/${movie.id}`}
                key={movie.id}
                onClick={() => handleFocus()}
              >
                <div className="flex">
                  <img
                    className="w-[67px] h-[100px]"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt=""
                  />
                  <div>
                    <h1 className="text-[20px] text-[#09090B] font-semibold leading-7">
                      {movie.title}
                    </h1>
                    <div className="flex gap-1 items-center">
                      <svg
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.00065 0.63324L10.0607 4.80657L14.6673 5.47991L11.334 8.72657L12.1207 13.3132L8.00065 11.1466L3.88065 13.3132L4.66732 8.72657L1.33398 5.47991L5.94065 4.80657L8.00065 0.63324Z"
                          fill="#FDE047"
                          stroke="#FDE047"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h2 className="font-medium">
                        {movie.vote_average.toFixed(1)}
                      </h2>
                      <h3 className="text-[#71717A]">/10</h3>
                    </div>
                    <h1>{movie.release_date}</h1>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href={`/searchMore?query=${searchValue}`}
            onClick={() => handleFocus()}
          >
            <div className="p-3 pt-0">
              See all the result for &#34;{searchValue}&#34;
            </div>
          </Link>
        </>
      )}
    </div>
  );
};
