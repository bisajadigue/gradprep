import { Button } from "@/components/elements";
import { Input } from "@/components/elements/Input";
import Head from "next/head";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

export default function OnboardingPage() {
  const [pageNum, setPageNum] = useState<number>(1);

  return (
    <>
      <Head>
        <title>Onboarding</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero */}
      <main className="relative flex min-h-screen flex-col items-center justify-start">
        <Toaster />
        <div className="relative h-[40vh] w-full  bg-primary text-white overflow-hidden">
          <div className="container mx-auto flex flex-row items-end justify-start gap-3 py-3 h-full z-20">
            <h2 className="z-20">Sebelum  kamu mulai, bantu kami agar lebih kenal denganmu.</h2>
          </div>
          <div className=" absolute -left-32 -top-36 z-0 h-[80vh] w-[80vh] rounded-full bg-[#5056ED]/[.64]"></div>
          <div className=" absolute -left-40 top-48 z-0 h-[50vh] w-[50vh] rounded-full bg-[#111692]/[.42]"></div>
          <div className=" absolute -bottom-56 -right-24 z-0 h-[64vh] w-[64vh] rounded-full bg-[#946CE8]/[.62]"></div>
          <div className=" absolute -right-48 bottom-12 z-0 h-[40vh] w-[40vh] rounded-full bg-[#111692]/[.42]"></div>
        </div>

        {/* form */}
        <div className="relative bg-white text-black">
          <div className="container mx-auto flex flex-col items-center justify-center min-h-[60vh] gap-4">
            <h3 className=" font-light">
              Ceritakan sedikit tentang dirimu.
            </h3>
            <Input placeholder="Isi dengan bio singkat..." className="min-w-[40vw]"/>
            <div className="flex gap-4 mt-12">
              <Button variant={"white"} size={"md"}>
                <RiArrowLeftLine /><p>Previous</p>
              </Button>
              <Button variant={"primary"} size={"md"} className="px-9">
                <p>Next</p> <RiArrowRightLine />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
