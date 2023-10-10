import Lottie from "lottie-react";
import Programs from "../../../../public/assets/lottie/program.json";
import { ProgramCard } from "@/components/elements/Cards/ProgramCard";
import { Button, SearchInput } from "@/components/elements";
import { RiFilter3Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import { api } from "@/utils/api";
import { ProgramCardProps } from "./interface";

export const ProgramModule: React.FC = () => {
  const { data } = api.event.getAllEvent.useQuery();

  const [events, setEvents] = useState<ProgramCardProps[]>([]);

  useEffect(() => {
    if (data) {
      // console.log(data);
      setEvents(data);
      console.log("risaaa");
      console.log(events);
    }
  }, [data, events]);

  return (
    <>
      {/* Hero */}
      <div className="relative flex h-full flex-col items-center justify-center bg-primary pt-32 text-white md:flex-row">
        <div className="container flex flex-col items-center justify-center md:flex-row lg:flex-row">
          <div className="px-3 text-center ">
            {/* <div className=" absolute -left-32 -top-48 z-0 h-[80vh] w-[80vh] rounded-full bg-[#5056ED]/[.42]"></div>
            <div className=" absolute -left-40 top-64 z-0 h-[50vh] w-[50vh] rounded-full bg-[#111692]/[.42]"></div>
            <div className=" absolute -right-48 bottom-12 z-0 h-[40vh] w-[40vh] rounded-full bg-[#111692]/[.42]"></div>
            <div className=" absolute -bottom-56 -right-24 z-0 h-[64vh] w-[64vh] rounded-full bg-[#946CE8]/[.62]"></div> */}
            <h2 className="text-2xl tracking-wide md:text-3xl lg:text-4xl">
              Temukan ratusan info beasiswa terlengkap dan terbaru!
            </h2>
            <p className="mt-3 text-base lg:text-xl">
              Temukan ratusan info beasiswa terlengkap & terbaru mulai dari
              beasiswa partial hingga fully funded di dalam dan luar negeri.
            </p>
          </div>
          <Lottie
            className=" w-80 md:w-[660px] lg:w-[680px]"
            animationData={Programs}
          />
        </div>
      </div>
      <div className="my-10 flex flex-row items-center justify-center gap-5 px-32">
        <SearchInput className="4/5 w-full" />
        <Button
          className="w-1/5 border-2  border-solid border-primary bg-white text-primary"
          variant={"primary"}
          size={"md"}
        >
          Tambah Filter
          {/* <div className="flex-between flex items-center justify-center">
            Tambah Filter */}
          <RiFilter3Line
            color="black"
            size={24}
            className="my-auto active:scale-[80%]"
          />
          {/* </div> */}
        </Button>
      </div>

      <div className="mb-20 flex flex-row items-center justify-center gap-16 bg-white px-2">
        {events.map((event) => {
          return (
            <>
              <ProgramCard
                id={event.id}
                title={event.title}
                type={event.type}
                funding={event.funding}
                providerName={event.providerName}
                description={event.description}
                startTime={event.startTime}
                endTime={event.endTime}
              />
            </>
          );
        })}

        {/* <ProgramCard id={0} title={"aaa"} type={"aaa"} funding={"aaa"} providerName={""} description={""} startTime="" endTime="" /> */}
      </div>
    </>
  );
};
