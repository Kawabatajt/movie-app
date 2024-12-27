import { Hero } from "./_components/Hero";
import { Upcoming } from "./_components/Upcoming";
import { TopRated } from "./_components/TopRated";
import { Popular } from "./_components/Popular";
import Section from "./_components/Section";
export type Movie = {
  id: number;
  title: string;
  poster: string;
  rating: number;
  vote_average: number;
  overview: string;
  backdrop_path: string;
  poster_path: string;
};
export default async function Home() {
  return (
    <div>
      <div className="w-screen h-[510px] mt-[11.5px] mb-[52px]">
        <Hero />
      </div>
      <Section title="Upcoming" endpoint="upcoming" />
      <Section title="Top Rated" endpoint="top_rated" />
      <Section title="Popular" endpoint="popular" />
    </div>
  );
}
