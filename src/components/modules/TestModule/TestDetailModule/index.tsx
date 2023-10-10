import Image from "next/image";
import { TestDetailCard } from "@/components/elements/Cards/TestCard/TestDetailCard";
import { InfoCard } from "@/components/elements/Cards/InfoCard";
import { Label } from "@/components/elements/Label";
import { useState, useEffect } from "react";
import { api } from "@/utils/api";
import { Test } from "../interface";

export const TestDetailModule: React.FC = () => {
  const [path, setPath] = useState<string>(""); // Provide a default value here
  const [test, setTest] = useState<Test>();
  const { data } = api.test.getTestById.useQuery({ testId: path });

  useEffect(() => {
    const urlParts = window.location.href.split("/");
    const testId = urlParts[urlParts.length - 1];

    if (testId) {
      setPath(testId);
    }

    console.log(data);

    setTest(data?.test);
    console.log(test);
  }, [path, data, test]);

  return (
    <>
      {/* Hero */}
      <div className=" relative flex h-full flex-col items-center justify-center bg-primary pt-40 text-white md:flex-row md:pt-60 lg:pt-60">
        <div className="justify-left container flex flex-col items-center sm:relative md:absolute md:flex-row lg:absolute lg:flex-row">
          <Image
            className="mx-3 h-[190px] w-[200px] rounded-[15px] object-cover group-hover:scale-105 lg:mx-14"
            src={"/assets/logo/fulbright-logo.png"}
            alt={""}
            width={300}
            height={300}
          />
          <div className=" text-left">
            {/* <div className=" absolute -left-32 -top-48 z-0 h-[80vh] w-[80vh] rounded-full bg-[#5056ED]/[.42]"></div>
            <div className=" absolute -left-40 top-64 z-0 h-[50vh] w-[50vh] rounded-full bg-[#111692]/[.42]"></div>
            <div className=" absolute -right-48 bottom-12 z-0 h-[40vh] w-[40vh] rounded-full bg-[#111692]/[.42]"></div>
            <div className=" absolute -bottom-56 -right-24 z-0 h-[64vh] w-[64vh] rounded-full bg-[#946CE8]/[.62]"></div> */}
            <h2 className="pt-5 text-center text-xl tracking-wide md:pt-12 md:text-left md:text-3xl lg:pt-12 lg:text-left lg:text-4xl">
              Ujian Simulasi {test?.name} 2022
            </h2>
            <div className="mt-8 text-white md:text-black lg:text-black">
              <div className="flex items-center justify-center gap-5 md:justify-start lg:justify-start">
                <p>Sisa waktu:</p>
                {/* <Label> {test?.testCategoryId}</Label> */}
              </div>
              <p className="pt-2 text-center md:text-start lg:text-start ">
                Aniati Murni Arymurthy adalah seorang dosen dan peneliti bidang
                Pattern Recognition, Image Processing, dan Spatial Data di
                Fasilkom UI.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col justify-center px-10 md:flex-row md:px-20 md:pt-20 lg:flex-row lg:px-40 lg:pt-20">
        <div className=" ">
          <h3>Instructions</h3>
          <p className="py-10 pr-10">
            This quiz consists of 5 multiple-choice questions. To be successful
            with the quizzes, its important to conversant with the topics. Keep
            the following in mind: Timing - You need to complete each of your
            attempts in one sitting, as you are allotted 30 minutes to each
            attempt. Answers - You may review your answer-choices and compare
            them to the correct answers after your final attempt. To start,
            click the
            {/* "Mulai" button. When finished, click the "Mulai " button. */}
          </p>
        </div>
        <div className="flex justify-center">
          <TestDetailCard />
        </div>
      </div>
      <div className="my-14 flex flex-col items-center justify-center gap-5 px-3">
        <InfoCard className="bg-transparant" />
        <InfoCard className="bg-transparant" />
      </div>
    </>
  );
};
