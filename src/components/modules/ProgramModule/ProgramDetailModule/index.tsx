import Lottie from "lottie-react";
// import Programs from "../../../../public/assets/lottie/program.json";
import { ProgramCard } from "@/components/elements/Cards/ProgramCard";
import { Button, SearchInput } from "@/components/elements";
import { RiFilter3Line } from "react-icons/ri";
import Eligible from "../../../../../public/assets/lottie/eligibility.json";

export const ProgramDetailModule: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <div className="md:px- relative flex h-full flex-col items-center justify-center bg-primary pt-32 text-white md:flex-row ">
        <div className="container items-center md:flex-row lg:flex-row">
          <div className="flex flex-col items-center justify-between px-3 py-8 md:flex-row lg:flex-row">
            {/* <div className=" absolute -left-32 -top-48 z-0 h-[80vh] w-[80vh] rounded-full bg-[#5056ED]/[.42]"></div>
            <div className=" absolute -left-40 top-64 z-0 h-[50vh] w-[50vh] rounded-full bg-[#111692]/[.42]"></div>
            <div className=" absolute -right-48 bottom-12 z-0 h-[40vh] w-[40vh] rounded-full bg-[#111692]/[.42]"></div>
            <div className=" absolute -bottom-56 -right-24 z-0 h-[64vh] w-[64vh] rounded-full bg-[#946CE8]/[.62]"></div> */}
            <div className="text-center md:text-left lg:text-left">
              <h2 className="text-2xl tracking-wide md:text-3xl lg:text-4xl">
                Beasiswa LPDP
              </h2>
              <div className="my-6 flex flex-row items-center justify-center gap-3 md:justify-start lg:justify-start">
                <div className="w-fit rounded-full bg-[#9A4AFF] px-3 py-2 text-center text-sm font-bold text-white">
                  S2
                </div>
                <div className="bg-green w-fit rounded-full p-2 text-center text-sm font-bold text-black lg:p-3">
                  Fully Funded
                </div>
              </div>
              <p className="mt-3 text-base font-bold tracking-wide lg:text-xl">
                Kemendikbud
              </p>
            </div>

            <div>
              <div className="my-5 flex justify-center md:justify-end lg:my-0 lg:justify-end">
                <Button
                  className="justify-end border-2 border-white bg-white"
                  variant={"primary"}
                  size={"md"}
                >
                  <p className="font-bold text-primary"> Apply now</p>
                </Button>
              </div>

              <div className="bg-lightpurple my-3 w-full rounded-xl p-5 text-black">
                <div className="flex flex-row gap-7 text-sm lg:text-lg">
                  <p>Mulai Registrasi</p>
                  <p>12 Juni 2025, 00.30 WIB</p>
                </div>
                <div className="mt-4 flex flex-row gap-7 text-sm lg:text-lg">
                  <p>Tenggat Waktu</p>
                  <p>25 Juni 2025, 00.30 WIB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-9 lg:px-24 lg:py-14">
        <p className="mt-3 text-base lg:text-xl">
          In today&aposs world, college students do not have it easy. In
          addition to the skyrocketing costs of college tuition, the amounts
          students will need to pay for expenses such as housing and
          transportation have also increased significantly. Many students
          struggle to cover these costs and ensure that they can receive the
          proper education and pursue their career goals. Students who attend
          college in states or regions of the country that are far away from
          their families will often face additional challenges and increased
          expenses, and they may be concerned that they will be unprepared to
          address these concerns. At Fawell & Fawell, they understand the issues
          that affect students who travel to other states to attend college, and
          they have created a scholarship program to provide assistance for
          these students.
        </p>
        <div className="my-8">
          <h2 className="text-3xl lg:text-4xl">Eligibility</h2>
          {/* <Lottie className="w-48" animationData={Eligible} /> */}
          <p className="mt-3 text-base lg:text-xl">
            Be enrolled in or have been accepted to a college or university that
            is located in a state where they did not attend high school or a
            state other than where their parents currently live. Have a GPA of
            3.0 or higher as of the most recent academic semester they have
            completed. Be above the age of 17. Be a U.S. citizen or a lawful
            permanent resident.
          </p>
        </div>
        <div className="my-8">
          <h2 className="text-3xl lg:text-4xl">Benefits</h2>
          <p className="mt-3 text-base lg:text-xl">
            Through the Fawell & Fawell Out-of-State Student Scholarship, they
            award $1,000 each semester to a qualified student who will be
            pursuing educational opportunities in a location outside of the
            state where they attended high school or where their parents
            currently live. Scholarship winners can use this money to pay for
            tuition, housing, other educational costs, or transportation-related
            expenses. Scholarship winners can use this money to pay for tuition,
            housing, other educational costs, or transportation-related
            expenses.
          </p>
        </div>
        <h2 className="mb-4 text-3xl lg:text-4xl">Lihat beasiswa Lainnya</h2>

        <div className="mb-20 flex flex-col items-center justify-center gap-16 bg-white lg:flex-row">
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
      </div>
    </>
  );
};
