import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Movie } from "../page";
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
    poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
  }));

  console.log(filteredMovie);
  return (
    <div>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            {filteredMovie.slice(0, 1).map((movie: Movie) => (
              <div key={movie.id}>
                <img src={movie.poster} className="w-[375px] h-[246px]" />
              </div>
            ))}
          </CarouselItem>
          <CarouselItem>
            {filteredMovie.slice(1, 2).map((movie: Movie) => (
              <div key={movie.id}>
                <img src={movie.poster} className="w-[375px] h-[246px]" />
              </div>
            ))}
          </CarouselItem>
          <CarouselItem>
            {filteredMovie.slice(2, 3).map((movie: Movie) => (
              <div key={movie.id}>
                <img src={movie.poster} className="w-[375px] h-[246px]" />
              </div>
            ))}
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
