import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Movie } from "../page";
import { Play } from "lucide-react";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
  },
};
export const Hero = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    options
  );
  const data = await res.json();
  const movieData = data.results;
  console.log(movieData);
  const filteredMovie = movieData.map((movie: Movie) => ({
    id: movie.id,
    title: movie.title,
    rating: movie.vote_average,
    poster: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
    overview: movie.overview,
  }));

  console.log(movieData);
  return (
    <div>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            {filteredMovie.slice(0, 1).map((movie: Movie) => (
              <div key={movie.id}>
                <img src={movie.poster} className="w-screen h-[246px]" />
                <div className="flex justify-between px-[20px] items-center">
                  <div className="mt-[20px]">
                    <span>Now Playing:</span>
                    <h1 className="text-[#09090B] text-[24px] font-bold">
                      {movie.title}
                    </h1>
                  </div>
                  <div className="flex">
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
                    <h1>{movie.rating}/10</h1>
                  </div>
                </div>
                <p className="mt-[20px] px-[20px]">{movie.overview}</p>
              </div>
            ))}
            <button className="px-[16px] py-[8px] flex bg-[#18181B] rounded-md items-center mt-[16px] ml-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-play"
              >
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
              ;<h1 className="text-white">Watch Trailer</h1>
            </button>
          </CarouselItem>
          <CarouselItem>
            {filteredMovie.slice(1, 2).map((movie: Movie) => (
              <div key={movie.id}>
                <img src={movie.poster} className="w-screen h-[246px]" />
                <div className="flex justify-between px-[20px] items-center">
                  <div className="mt-[20px]">
                    <span>Now Playing:</span>
                    <h1 className="text-[#09090B] text-[24px] font-bold">
                      {movie.title}
                    </h1>
                  </div>
                  <div className="flex">
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
                    <h1>{movie.rating}/10</h1>
                  </div>
                </div>
                <p className="mt-[20px] px-[20px]">{movie.overview}</p>
              </div>
            ))}
            <button className="px-[16px] py-[8px] flex bg-[#18181B] rounded-md items-center mt-[16px] ml-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-play"
              >
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
              ;<h1 className="text-white">Watch Trailer</h1>
            </button>
          </CarouselItem>
          <CarouselItem>
            {filteredMovie.slice(2, 3).map((movie: Movie) => (
              <div key={movie.id}>
                <img src={movie.poster} className="w-screen h-[246px]" />
                <div className="flex justify-between px-[20px] items-center">
                  <div className="mt-[20px]">
                    <span>Now Playing:</span>
                    <h1 className="text-[#09090B] text-[24px] font-bold">
                      {movie.title}
                    </h1>
                  </div>
                  <div className="flex">
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
                    <h1>{movie.rating}/10</h1>
                  </div>
                </div>
                <p className="mt-[20px] px-[20px]">{movie.overview}</p>
              </div>
            ))}
            <button className="px-[16px] py-[8px] flex bg-[#18181B] rounded-md items-center mt-[16px] ml-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-play"
              >
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
              ;<h1 className="text-white">Watch Trailer</h1>
            </button>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
