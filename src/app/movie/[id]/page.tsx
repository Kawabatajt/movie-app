import { Movie } from "@/app/page";
import { Badge } from "@/components/ui/badge";
type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
    },
  };

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}`,
    options
  );
  const data = await res.json();

  const resCredit = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}/credits`,
    options
  );
  const creditData = await resCredit.json();
  console.log(creditData);

  const backDropPath = `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`;
  const posterPath = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
  return (
    <div className="mt-[32px]">
      <div className="ml-[20px] mb-[16px]">
        <h1 className="text-[#09090B] text-[24px] font-semibold">
          {data.title}
        </h1>
        <h2 className="font-normal text-[14px]">{`${data.release_date}·PG·${data.runtime}m`}</h2>
      </div>
      <div>
        <img src={backDropPath} alt="" />
      </div>
      <div className="mt-[32px] flex px-[20px] gap-[32px]">
        <img src={posterPath} className="w-[100px] h-[148px]" />
        <div>
          {data.genres.map((genre: { id: number; name: string }) => (
            <Badge
              className="mr-[12px] mb-[12px] rounded-full"
              variant="outline"
            >
              {genre.name}
            </Badge>
          ))}

          <p className="font-normal text-[16px] leading-6 text-left ml-[3px]">
            {data.overview}
          </p>
        </div>
      </div>
      <div className="px-[20px]">
        <div className="flex gap-[70px] w-[335px] h-[61px] mb-[20px] mt-[20px] border-b-2 items-center border-[#E4E4E7]">
          <h1 className="font-bold text-[16px]">Director</h1>
          {creditData.crew
            .filter((detail: { job: string }) => detail.job === "Director")
            .map((detail: { name: string }) => {
              return <h2>{detail?.name}</h2>;
            })}
        </div>
        <div className="flex gap-[75px] w-[335px] h-[61px]  mb-[20px] mt-[20px] border-b-2 items-center border-[#E4E4E7]">
          <h1 className="font-bold text-[16px]">Writers</h1>
          <div className="flex flex-wrap gap-2">
            {creditData.crew
              .filter(
                (detail: { department: string }) =>
                  detail.department === "Writing"
              )
              .slice(0, 3)
              .map((detail: { name: string }) => {
                return <h2>{detail?.name}</h2>;
              })}
          </div>
        </div>
        <div className="flex gap-[90px] w-[335px] h-[61px] mt-[20px] overflow-hidden border-b-2 items-center mb-[20px] border-[#E4E4E7]">
          <h1 className="font-bold text-[16px]">Stars</h1>
          <div className="flex flex-wrap gap-2">
            {creditData.cast
              .filter(
                (detail: { known_for_department: string }) =>
                  detail.known_for_department === "Acting"
              )
              .slice(0, 2)
              .map((detail: { name: string }) => {
                return <h2>{detail?.name}</h2>;
              })}
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <h1 className="font-bold">More like this</h1>
          <h2>see more</h2>
        </div>
        <div></div>
      </div>
    </div>
  );
}
