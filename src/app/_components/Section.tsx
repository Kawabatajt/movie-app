import type { Movie } from "../page";
import Link from "next/link";
import { MovieCard } from "./MovieCard";
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
export default async function Section({ title, endpoint }: Props) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=1`,
    options
  );
  const resJson = await res.json();
  const movies: Movie[] = resJson.results.slice(0, 10);
  return (
    <div>
      <div className="flex justify-between py-[32px] px-[20px] text-[#09090B]">
        <h1 className="text-2xl font-semibold ">{title}</h1>
        <Link href={endpoint} className="flex items-center gap-[11px]">
          See more <ArrowRight className="w-[20px] h-[20px] stroke-[1.5px]" />
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 md:gap-5">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
}
