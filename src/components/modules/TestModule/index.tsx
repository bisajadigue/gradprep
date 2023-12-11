/* eslint-disable @next/next/no-html-link-for-pages */
import Lottie from "lottie-react";
import Value from "../../../../public/assets/lottie/value.json";
import Value1 from "../../../../public/assets/lottie/value1.json";
import Value2 from "../../../../public/assets/lottie/value2.json";
import Value3 from "../../../../public/assets/lottie/value3.json";
import Value4 from "../../../../public/assets/lottie/value4.json";
import { HistoryCard } from "@/components/elements/Cards/HistoryCard";
import Link from "next/link";

import Test from "../../../../public/assets/lottie/test.json";
import { TestCard } from "@/components/elements/Cards/TestCard";
import Image from "next/image";

export const TestModule: React.FC = () => {
  return (
    <>
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
          <div className="px-3 text-center ">
            {/* <div className=" absolute -left-32 -top-48 z-0 h-[80vh] w-[80vh] rounded-full bg-[#5056ED]/[.42]"></div>
            <div className=" absolute -left-40 top-64 z-0 h-[50vh] w-[50vh] rounded-full bg-[#111692]/[.42]"></div>
            <div className=" absolute -right-48 bottom-12 z-0 h-[40vh] w-[40vh] rounded-full bg-[#111692]/[.42]"></div>
            <div className=" absolute -bottom-56 -right-24 z-0 h-[64vh] w-[64vh] rounded-full bg-[#946CE8]/[.62]"></div> */}
            <h2 className="text-xl tracking-wide md:text-3xl lg:text-4xl">
              Taklukkan semua tes dan bangun masa depanmu yang lebih cerah.
            </h2>
          </div>
          <Lottie
            className=" w-60 md:w-[660px] lg:w-[680px]"
            animationData={Test}
          />
        </div>
      </div>

      <div className="my-9 flex flex-col items-center justify-center gap-9 md:flex-row lg:flex-row">
        <TestCard
          data={{
            userId: "12312321",
            name: "Risa Lestari",
            email: "wee@mail.com",
            ppUrl: "/profile.svg",
            cvUrl: "",
            experiences: [
              {
                organization: "Universitas Indonesia",
                title: "S1",
                startPeriod: "2022-01-01",
                endPeriod: "2023-01-01",
              },
            ],
            bio: "lover",
            education: "Computer Science",
            expertise: "Universitas Indonesia",
          }}
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          <HistoryCard
            className="w-full"
            data={{
              userId: "12312321",
              name: "IELTS",
              email: "6.5",
              ppUrl: "/indo.svg",
              cvUrl: "",
              experiences: [
                {
                  organization: "Universitas Indonesia",
                  title: "Dosen",
                  startPeriod: "2022-01-01",
                  endPeriod: "2023-01-01",
                },
              ],
              bio: "lover",
              education: "Computer Science",
              expertise: "Information Retrieval",
            }}
          />

          <HistoryCard
            className="w-full"
            data={{
              userId: "12312321",
              name: "SAT",
              email: "900",
              ppUrl: "/geo.svg",
              cvUrl: "",
              experiences: [
                {
                  organization: "Universitas Indonesia",
                  title: "Dosen",
                  startPeriod: "2022-01-01",
                  endPeriod: "2023-01-01",
                },
              ],
              bio: "lover",
              education: "Computer Science",
              expertise: "Information Retrieval",
            }}
          />
          <HistoryCard
            className="w-full"
            data={{
              userId: "12312321",
              name: "GMAT",
              email: "500",
              ppUrl: "/bio.svg",
              cvUrl: "",
              experiences: [
                {
                  organization: "Universitas Indonesia",
                  title: "Dosen",
                  startPeriod: "2022-01-01",
                  endPeriod: "2023-01-01",
                },
              ],
              bio: "lover",
              education: "Computer Science",
              expertise: "Information Retrieval",
            }}
          />
          <HistoryCard
            className="w-full"
            data={{
              userId: "12312321",
              name: "TOEFL",
              email: "600",
              ppUrl: "/psiko.svg",
              cvUrl: "",
              experiences: [
                {
                  organization: "Universitas Indonesia",
                  title: "Dosen",
                  startPeriod: "2022-01-01",
                  endPeriod: "2023-01-01",
                },
              ],
              bio: "lover",
              education: "Computer Science",
              expertise: "Information Retrieval",
            }}
          />
        </div>
      </div>

      <div className="flex justify-center px-10">
        <div className="w-full rounded-xl  bg-lilac  p-2 text-center lg:w-4/5 lg:p-6">
          <h3 className="mb-16">Keunggulan Prep Test di GradPrep</h3>
          <div className="grid justify-items-center gap-10 md:grid-cols-3 lg:grid-cols-3">
            <div className="mlex  w-full flex-col justify-center rounded-xl bg-white p-2 text-center">
              <div className="flex justify-center">
                <Lottie className="-mt-14 w-24 lg:w-32" animationData={Value} />
              </div>
              <h4 className="font-bold">Kurikulum Terpercaya</h4>
              <p className="text-sm lg:text-lg">
                Penerapan kurikulum Cambridge dan Collins bantu raih skor
                tinggi.
              </p>
            </div>
            <div className="flex  w-full flex-col justify-center rounded-xl bg-white p-2 text-center">
              <div className="flex justify-center">
                <Lottie
                  className="-mt-14 w-24 lg:w-32"
                  animationData={Value1}
                />
              </div>
              <h4 className="font-bold">Tutor Berpengalaman</h4>
              <p className="text-sm lg:text-lg">
                Kamu akan dibimbing oleh Tutor berpengalaman.
              </p>
            </div>
            <div className="flex  w-full flex-col justify-center rounded-xl bg-white p-2 text-center">
              <div className="flex justify-center">
                <Lottie
                  className="-mt-14 w-24 lg:w-32"
                  animationData={Value2}
                />
              </div>
              <h4 className="font-bold">Jadwal Fleksibel</h4>
              <p className="text-sm lg:text-lg">
                Bebas tentukan jadwal bimbingan sesuai kesepakatan dengan tutor.
              </p>
            </div>
          </div>

          <div className="mt-10 grid justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex  w-full flex-col justify-center rounded-xl bg-white p-2 text-center">
              <div className="flex justify-center">
                <Lottie
                  className="-mt-14 w-24 lg:w-1/3"
                  animationData={Value3}
                />
              </div>
              <h4 className="font-bold">Dibimbing secara 1-on-1</h4>
              <p className="text-sm lg:text-lg">
                Kamu akan dibimbing oleh Tutor secara privat sesuai materi yang
                kamu pelajari.
              </p>
            </div>
            <div className="flex w-full flex-col justify-center rounded-xl bg-white p-2 text-center">
              <div className="flex justify-center">
                <Lottie
                  className="-mt-14 w-24 lg:w-1/3"
                  animationData={Value4}
                />
              </div>
              <h4 className="font-bold">Gratis Simulasi Tes </h4>
              <p className="text-sm lg:text-lg">
                Kesempatan untuk dapat tes simulasi gratis untuk mengetahui
                progress belajar.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-10 text-center lg:px-44 lg:text-start">IELTS</h2>
      <div className="mb-10 grid items-center justify-items-center  gap-4 bg-white px-3 md:grid-cols-2 md:px-20 lg:grid-cols-3 lg:px-32">
        <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
          <a href="#">
            <Image
              src={"/indo.svg"}
              alt={"wee"}
              width={260}
              height={260}
              className="mr-4 h-[300px] w-[420px] rounded-[35px] object-cover p-5 group-hover:scale-105"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                IELTS Speaking
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Peserta akan diberikan kartu topik dan diberikan satu menit untuk
              mempersiapkan pidato singkat. Setelah itu, mereka harus berbicara
              selama 1-2 menit tentang topik tersebut.
            </p>
            <Link
              className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              href={"/tests/1"}
            >
              Ikuti tes
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
          <a href="#">
            <Image
              src={"/inggris.svg"}
              alt={"wee"}
              width={260}
              height={260}
              className="mr-4 h-[300px] w-[420px] rounded-[35px] object-cover p-5 group-hover:scale-105"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                IELTS Writing
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Peserta akan diminta untuk menulis esai argumentatif mengenai
              topik umum. Mereka diharapkan untuk menyusun argumen, memberikan
              pandangan, dan mendukungnya dengan contoh atau bukti.
            </p>
            <Link
              className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              href={"/tests/1"}
            >
              Ikuti tes
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
          <a href="#">
            <Image
              src={"/bio.svg"}
              alt={"wee"}
              width={260}
              height={260}
              className="mr-4 h-[300px] w-[420px] rounded-[35px] object-cover p-5 group-hover:scale-105"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                IELTS Listening
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Peserta mendengarkan percakapan kelompok dan menjawab pertanyaan
              tentang topik tersebut dan Peserta mendengarkan percakapan
              sehari-hari dan menjawab pertanyaan-pertanyaan singkat.
            </p>
            <Link
              className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              href={"/tests/1"}
            >
              Ikuti tes
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <h2 className="text-center lg:px-44 lg:text-start">SAT</h2>
      <div className="mb-10 grid items-center justify-items-center  gap-4 bg-white px-3 md:grid-cols-2 md:px-20 lg:grid-cols-3 lg:px-32">
        <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
          <a href="#">
            <Image
              src={"/geo.svg"}
              alt={"wee"}
              width={260}
              height={260}
              className="mr-4 h-[300px] w-[420px] rounded-[35px] object-cover p-5 group-hover:scale-105"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                SAT Reasoning Test
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Tes yang bertujuan menguji kemampuan pelajar dalam membaca,
              menulis dan matematika.
            </p>
            <Link
              className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              href={"/tests/1"}
            >
              Ikuti tes
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
          <a href="#">
            <Image
              src={"/pkn.svg"}
              alt={"wee"}
              width={260}
              height={260}
              className="mr-4 h-[300px] w-[420px] rounded-[35px] object-cover p-5 group-hover:scale-105"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                SAT Subject Test
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Tes yang bertujuan menguji keterampilan pelajar dalam
              bidang-bidang studi tertentu.
            </p>
            <Link
              className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              href={"/tests/1"}
            >
              Ikuti tes
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="mb-20 flex flex-row items-center justify-center gap-16 bg-white px-2">
        {/* <ProgramCard id={0} title={"aaa"} type={"aaa"} funding={"aaa"} providerName={""} description={""} startTime="" endTime="" /> */}
      </div>
    </>
  );
};
