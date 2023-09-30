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
            <h2>Temukan ratusan info beasiswa terlengkap dan terbaru!</h2>
            <p>
              Temukan ratusan info beasiswa terlengkap & terbaru mulai dari
              beasiswa partial hingga fully funded di dalam dan luat negeri.
            </p>
          </div>
          <Lottie className="-mb-60" animationData={Programs} />
        </div>
      </div>

      <div className="px-20">
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
