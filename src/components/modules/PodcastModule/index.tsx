/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useState } from "react";
import Image from "next/image";
import { PodcastInterface } from "./interface";
import Programs from "../../../../public/assets/lottie/podcast.json";
import Lottie from "lottie-react";

export const PodcastModule: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { Client } = require("podcast-api");

  //
  // If apiKey is null, then we will connect to a mock server
  // that returns fake data for testing purposes.
  //
  // To get an apiKey to fetch real data, please visit:
  //     https://www.listennotes.com/api/pricing/
  //
  const client = Client({ apiKey: null });
  const [data, setData] = useState<PodcastInterface[]>([]);

  client
    .search({
      q: "star wars",
      sort_by_date: 0,
      type: "episode",
      genre_ids: "68,82",
      only_in: "title,description",
      language: "English",
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then((response: { data: any }) => {
      // Get response json data here
      setData(response.data.results);
      console.log(response.data.results);
    })
    .catch((error: any) => {
      console.log(error);
    });

  // Click "▶ run" to try this code live.
  return (
    <>
      {/* <div className="bg-blue-light flex items-center justify-center md:flex-col lg:flex-row"></div> */}
      {/* Hero */}
      <div
        className="relative flex h-full flex-col items-center justify-center pt-32 text-white md:flex-row"
        style={{
          backgroundImage: `url(/hero1.svg)`,
          backgroundSize: "cover", // Sesuaikan sesuai kebutuhan Anda
          backgroundPosition: "center", // Sesuaikan sesuai kebutuhan Anda
        }}
      >
        <div className="container flex flex-col items-center justify-center md:flex-row lg:flex-row">
          <div className="px-3 text-left ">
            {/* <div className=" absolute -left-32 -top-48 z-0 h-[80vh] w-[80vh] rounded-full bg-[#5056ED]/[.42]"></div>
            <div className=" absolute -left-40 top-64 z-0 h-[50vh] w-[50vh] rounded-full bg-[#111692]/[.42]"></div>
            <div className=" absolute -right-48 bottom-12 z-0 h-[40vh] w-[40vh] rounded-full bg-[#111692]/[.42]"></div>
            <div className=" absolute -bottom-56 -right-24 z-0 h-[64vh] w-[64vh] rounded-full bg-[#946CE8]/[.62]"></div> */}
            <h2 className="text-2xl tracking-wide md:text-3xl lg:text-4xl">
              Temukan ratusan info beasiswa terlengkap dan terbaru!
            </h2>
            <p className="mt-3 text-base lg:text-xl">
              Podcast ini menyoroti tips dan trik untuk mencari beasiswa,
              termasuk cara menulis esai beasiswa yang efektif dan menghadapi
              wawancara beasiswa.
            </p>
          </div>
          <Lottie
            className=" w-80 md:w-[660px] lg:w-[680px]"
            animationData={Programs}
          />
        </div>
      </div>
      <div className="bg-blue-light grid grid-cols-3 gap-6 px-10 pb-20">
        {data.map((elem: PodcastInterface) => {
          return (
            <div
              key={elem.id}
              className="flex flex-col items-center justify-center bg-[#f2f3fa]"
            >
              <div className="relative flex max-h-40 w-full max-w-[768px] flex-row items-center justify-start rounded-md bg-white p-8 shadow-sm">
                <img
                  src={elem.image}
                  className="w-[100px] rounded-xl"
                  alt={""}
                />

                <p className="grow pl-9 text-xl font-semibold">
                  {elem.title_original}
                </p>
              </div>
              <span className="group clear-left cursor-pointer rounded-full bg-[#eff0f9] p-4 [&_*]:transition-all [&_*]:duration-150 [&_*]:ease-in">
                <audio
                  controls
                  className="block w-52 rounded-full bg-white px-3 py-3 shadow-md group-hover:bg-rose-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:fill-white group-hover:stroke-white"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#7e9cff"
                    fill="#7e9cff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 4v16l13 -8z" />
                  </svg>
                  <source src={elem.audio} type="audio/mp3" />
                </audio>
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};
