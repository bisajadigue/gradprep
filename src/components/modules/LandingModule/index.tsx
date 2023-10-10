import { Button } from "@/components/elements";
import Lottie from "lottie-react";
import Head from "next/head";
import { RiArrowLeftCircleFill, RiArrowRightCircleFill } from "react-icons/ri";

import Books from "public/assets/lottie/books-1.json";
import Connect from "public/assets/lottie/connect.json";
import Info from "public/assets/lottie/info.json";
import Quiz from "public/assets/lottie/quiz.json";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { api } from "@/utils/api";
import { $Enums, PrismaClient, Prisma } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { TRPCClientErrorLike } from "@trpc/client";
import { UseTRPCQueryResult } from "@trpc/react-query/shared";
import { BuildProcedure, RootConfig, unsetMarker } from "@trpc/server";
import { TRPC_ERROR_CODE_NUMBER } from "@trpc/server/rpc";
import { Session } from "next-auth";
import SuperJSON from "superjson";
import { typeToFlattenedError } from "zod";
import { useRouter } from "next/router";

const LOGOS: string[] = [
  "cambridge-logo.png",
  "ielts-logo.png",
  "kementerian-pendidikan-logo.png",
  "fulbright-logo.png",
  "sat-logo.png",
  "the-london-college-logo.png",
  "umelb-logo.jpeg",
  "aminef-logo.png",
]

export default function LandingPage() {
  const { data: sessionData } = useSession();
  const fetchUser = api.userData.getCurrentUserInformation.useQuery()
  const router = useRouter()

  useEffect(() => {
    if (!fetchUser.isFetched) return;
    if (fetchUser.data?.isOnboarded === false) {
      void router.push('/user/onboarding');
    }
  }, [fetchUser.data?.isOnboarded, fetchUser.isFetched, router, sessionData])

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero */}
      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <div className="container flex flex-col items-center justify-center px-[10vw]">
          <div className=" absolute -left-32 -top-48 z-0 h-[80vh] w-[80vh] rounded-full bg-[#5056ED]/[.42]"></div>
          <div className=" absolute -left-40 top-64 z-0 h-[50vh] w-[50vh] rounded-full bg-[#111692]/[.42]"></div>
          <div className=" absolute -right-48 bottom-12 z-0 h-[40vh] w-[40vh] rounded-full bg-[#111692]/[.42]"></div>
          <div className=" absolute -bottom-56 -right-24 z-0 h-[64vh] w-[64vh] rounded-full bg-[#946CE8]/[.62]"></div>
          <h1>
            Persiapkan masa depanmu dalam waktu{" "}
            <span className=" italic text-primary">
              20 menit
            </span>
            .
          </h1>
        </div>
        {/* <div className="flex flex-col items-center gap-2">
          <div className="grid grid-cols-2 gap-4">
            <Input />
            <SearchInput placeholder="This is a SearchInput" className="z-10" />
          </div>
        </div> */}
      </main>

      {/* Section 2 */}
      <div className="relative flex min-h-[90vh] h-fit flex-col text-center md:text-start items-center justify-center bg-primary text-white">
        <div className="container flex flex-col md:flex-row">
          <Lottie animationData={Books} className=""/>
          <div className="flex md:max-w-[60%] flex-col justify-center">
            <h2 className=" flex-wrap">Apakah kamu siap menghadapi tantangan masa depan?</h2>
            <p>
              Untuk mematangkan diri menuju pendidikan pascasarjana, kamu dapat
              melakukan seluruh persiapanmu di GradPrep! Platform kami adalah{" "}
              <i>one-stop solution</i> untuk meraih cita-cita masa depanmu.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative flex min-h-[90vh] pb-20 flex-col items-center justify-center bg-white">
        <h2 className="container mb-12 text-center">
          Semua kebutuhanmu di satu platform.
        </h2>
        <div className="container flex flex-col md:flex-row justify-center gap-x-12">
          <div className="w-full">
            <div className="mx-auto w-[20%] md:w-[50%]">
              <Lottie animationData={Quiz} />
            </div>
            <p>
              Uji kemampuanmu dengan <u>Mock Test</u> !
            </p>
          </div>
          <div className="w-full">
            <div className="mx-auto w-[20%] md:w-[50%]">
              <Lottie animationData={Info} />
            </div>
            <p>
              Temukan semua informasi terkait <u>beasiswa dan program S2/S3</u>{" "}
              yang kamu butuhkan.
            </p>
          </div>
          <div className="w-full">
            <div className="mx-auto w-[20%] md:w-[50%]">
              <Lottie animationData={Connect} />
            </div>
            <p>
              Butuh bantuan? Tanyakan ke <u>Mentor</u> kami.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="relative flex h-[90vh] flex-col items-center justify-start bg-primary text-white">

        {/* popup */}
        <div className="container relative -top-[13vh] flex flex-col gap-y-3 h-[26vh] items-center justify-center rounded-[15px] bg-white p-20 text-black shadow-lg shadow-gray-700">
          <h2>Mitra Kami</h2>
          <div className="grid grid-cols-4 md:grid-cols-8 place-content-between w-full place-items-center">
            { LOGOS.map((logo, i) => <Image 
              key={i}
              src={`/assets/logo/${logo}`}
              width={50}
              height={50}
              alt="logo"
              className="w-[50px] h-[50px] object-contain rounded-md"
            />) }
          </div>
        </div>

        <h2 className="container text-center mb-4">Kata Mereka</h2>
        <div className="container flex flex-row justify-center gap-x-4 sm:gap-x-6 md:gap-x-12">
          <button className="transition-all active:scale-[0.85]">
            <RiArrowLeftCircleFill size={48} />
          </button>
          <div className="w-[70vw] md:w-[30vw] text-center flex flex-col gap-4">
            <div className="mx-auto w-[50%]">
              <Image 
                src="/assets/pictures/person-1.png"
                width={120}
                height={120}
                alt="person"
                className="rounded-full mx-auto"
              />
            </div>
            <p className="font-bold">GradPrep membantu banget!</p>
            <p>
              GradPrep sangat membantuku dalam pencarian dan persiapan untuk program S2, 
              karena informasinya lengkap dan mock test nya berguna.
            </p>
          </div>
          <button className="transition-all active:scale-[0.85]">
            <RiArrowRightCircleFill size={48} />
          </button>
        </div>
      </div>

      <div className="relative flex h-[90vh] flex-col items-center justify-center bg-white">
        <div className="container mb-12 text-center">
          <h2>
            Coba{" "}
            <span className="font-bold italic underline">sekarang juga</span>.
          </h2>
          <p>Gada salahnya kan coba-coba?</p>
        </div>
        <Button variant={"primary"} size={"md"}>
          Daftar Sekarang
        </Button>
      </div>
    </>
  );
}
