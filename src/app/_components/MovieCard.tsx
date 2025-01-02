"use client";
import type { Movie } from "../page";
import Link from "next/link";
export const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <Link href={`/movie/${movie.id}`} className="m-0">
      <div
        key={movie.id}
        className="w-[157px] h-[309px] mx-auto rounded-lg bg-[#F4F4F5] md:w-[229px] md:h-[439px]"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          className="h-[233px] rounded-tl-lg rounded-tr-lg"
        />
        <div className="flex items-center px-[8px] pt-[8px] ">
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
          <h1 className="text-[#09090B]">{movie.vote_average.toFixed(1)}</h1>
          <p className="text-[#71717A]">/10</p>
        </div>
        <h1 className="text-[14px] ml-[8px] leading-5">{movie.title}</h1>
      </div>
    </Link>
  );
};
