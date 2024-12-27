const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
  },
};
import type { Movie } from "../page";
import Link from "next/link";
export const Popular = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  );
  const data = await res.json();
  const movieData = data.results;

  const filteredMovie = movieData.map((movie: Movie) => ({
    id: movie.id,
    title: movie.title,
    rating: movie.vote_average,
    poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
  }));
  return (
    <div className="grid grid-cols-2 mt-[20px]">
      {filteredMovie.slice(0, 10).map((movie: Movie) => {
        return (
          <Link href={`/movie/${movie.id}`}>
            <div key={movie.id}>
              <div
                key={movie.id}
                className="w-[157px] h-[309px] mx-auto rounded-lg bg-[#F4F4F5] mb-[20px]"
              >
                <img
                  src={movie.poster}
                  className="h-[233px] rounded-tl-lg rounded-tr-lg"
                />
                <div className="flex items-center px-[8px] pt-[8px] ">
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-[5px]"
                  >
                    <path
                      d="M8.00065 0.63324L10.0607 4.80657L14.6673 5.47991L11.334 8.72657L12.1207 13.3132L8.00065 11.1466L3.88065 13.3132L4.66732 8.72657L1.33398 5.47991L5.94065 4.80657L8.00065 0.63324Z"
                      fill="#FDE047"
                      stroke="#FDE047"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h1 className="text-[#09090B]">{movie.rating}</h1>
                  <p className="text-[#71717A]">/10</p>
                </div>
                <h1 className="text-[14px] ml-[8px] leading-5">
                  {movie.title}
                </h1>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
