import Lottie from "lottie-react";
import Programs from "../../../../public/assets/lottie/program.json";
import { ProgramCard } from "@/components/elements/Cards/ProgramCard";
import { SearchInput } from "@/components/elements";

export const ProgramModule: React.FC = () => {
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
      <div className="my-10 flex justify-center px-3">
        <SearchInput className="w-10/12" />
      </div>

      <div className="mb-20 flex flex-row items-center justify-center gap-16 bg-white px-2">
        <ProgramCard
          id={0}
          title={""}
          type={""}
          funding={""}
          providerName={""}
          description={""}
        />
        <ProgramCard
          id={0}
          title={""}
          type={""}
          funding={""}
          providerName={""}
          description={""}
        />

        <ProgramCard
          id={0}
          title={""}
          type={""}
          funding={""}
          providerName={""}
          description={""}
        />

        {/* <ProgramCard id={0} title={"aaa"} type={"aaa"} funding={"aaa"} providerName={""} description={""} startTime="" endTime="" /> */}
      </div>
    </>
  );
};
