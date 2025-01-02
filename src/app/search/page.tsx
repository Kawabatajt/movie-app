"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
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
  const genres = searchParams.get("with_genres");
  // const useEffect ( () => {
  //     const fetchGenre = async () => {
  //             const response = await fetch(`https://api.themoviedb.org/3/discover/movie?withgenres=${genres}&language=en-US&page=1`,options)
  //             const movieGenre = await response.json()
  //             setMovies(movieGenre?.results)
  //         }
  //         fetchGenre()

  //     },[genres])
  return <div></div>;
}
