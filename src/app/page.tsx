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
      <div className="w-screen h-[510px] mt-[11.5px] mb-[72px] md:mb-[100px] md:h-[600px]">
        <Hero />
      </div>
      <Section title="Upcoming" endpoint="upcoming?page=1" />
      <Section title="Top Rated" endpoint="top_rated?page=1" />
      <Section title="Popular" endpoint="popular?page=1" />
    </div>
  );
}
