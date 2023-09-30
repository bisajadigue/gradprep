import Lottie from "lottie-react";
import Programs from "../../../../public/assets/lottie/program.json";
import { ProgramCard } from "@/components/elements/Cards/ProgramCard";
import { SearchInput } from "@/components/elements";

export const ProgramModule: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <div className="relative flex h-[74vh] flex-col items-center justify-center bg-primary text-white">
        <div className="container flex flex-row">
          <div className="flex max-w-[60%] flex-col justify-center">
            <div className=" absolute -left-32 -top-48 z-0 h-[80vh] w-[80vh] rounded-full bg-[#5056ED]/[.42]"></div>
            <div className=" absolute -left-40 top-64 z-0 h-[50vh] w-[50vh] rounded-full bg-[#111692]/[.42]"></div>
            <div className=" absolute -right-48 bottom-12 z-0 h-[40vh] w-[40vh] rounded-full bg-[#111692]/[.42]"></div>
            <div className=" absolute -bottom-56 -right-24 z-0 h-[64vh] w-[64vh] rounded-full bg-[#946CE8]/[.62]"></div>
            <h2>Temukan ratusan info beasiswa terlengkap dan terbaru!</h2>
            <p>
              Temukan ratusan info beasiswa terlengkap & terbaru mulai dari
              beasiswa partial hingga fully funded di dalam dan luat negeri.
            </p>
          </div>
          <Lottie className="-mb-60" animationData={Programs} />
        </div>
      </div>

      <div className=" bg-white px-20">
        <div className="my-10">
          <SearchInput className="w-1/2" />
        </div>
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
