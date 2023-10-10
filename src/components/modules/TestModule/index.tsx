import Lottie from "lottie-react";
import Value from "../../../../public/assets/lottie/value.json";
import Value1 from "../../../../public/assets/lottie/value1.json";
import Value2 from "../../../../public/assets/lottie/value2.json";
import Value3 from "../../../../public/assets/lottie/value3.json";
import Value4 from "../../../../public/assets/lottie/value4.json";
import { HistoryCard } from "@/components/elements/Cards/HistoryCard";

import Test from "../../../../public/assets/lottie/test.json";
import { TestCard } from "@/components/elements/Cards/TestCard";

export const TestModule: React.FC = () => {
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
            name: "wee",
            email: "wee@mail.com",
            ppUrl: "https://placekitten.com/900/500",
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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          <HistoryCard
            className="w-full"
            data={{
              userId: "12312321",
              name: "wee",
              email: "wee@mail.com",
              ppUrl: "https://placekitten.com/900/500",
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
              name: "wee",
              email: "wee@mail.com",
              ppUrl: "https://placekitten.com/900/500",
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
              name: "wee",
              email: "wee@mail.com",
              ppUrl: "https://placekitten.com/900/500",
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
              name: "wee",
              email: "wee@mail.com",
              ppUrl: "https://placekitten.com/900/500",
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
        <div className="w-full rounded-xl  bg-lilac  p-2 text-center lg:w-3/4 lg:p-6">
          <h3 className="mb-16">Keunggulan Prep Test di GradPrep</h3>
          <div className="grid justify-items-center gap-10 md:grid-cols-3 lg:grid-cols-3">
            <div className="mlex  w-full flex-col justify-center rounded-xl bg-white p-2 text-center">
              <div className="flex justify-center">
                <Lottie className="-mt-14 w-24 lg:w-32" animationData={Value} />
              </div>
              <h4 className="font-bold">Kurikulum Terpercaya</h4>
              <p className="text-sm lg:text-xl">
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
              <p className="text-sm lg:text-xl">
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
              <p className="text-sm lg:text-xl">
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
              <p className="text-sm lg:text-xl">
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
              <p className="text-sm lg:text-xl">
                Kesempatan untuk dapat tes simulasi gratis untuk mengetahui
                progress belajar.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-10 text-center lg:px-44 lg:text-start">IELTS</h2>
      <div className="mb-10 grid items-center justify-items-center  gap-4 bg-white px-3 md:grid-cols-2 md:px-20 lg:grid-cols-3 lg:px-32">
        <TestCard
          data={{
            userId: "12312321",
            name: "wee",
            email: "wee@mail.com",
            ppUrl: "https://placekitten.com/900/500",
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
        <TestCard
          data={{
            userId: "12312321",
            name: "wee",
            email: "wee@mail.com",
            ppUrl: "https://placekitten.com/900/500",
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
        <TestCard
          data={{
            userId: "12312321",
            name: "wee",
            email: "wee@mail.com",
            ppUrl: "https://placekitten.com/900/500",
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

      <h2 className="text-center lg:px-44 lg:text-start">SAT</h2>
      <div className="mb-10 grid items-center justify-items-center  gap-4 bg-white px-3 md:grid-cols-2 md:px-20 lg:grid-cols-3 lg:px-32">
        <TestCard
          data={{
            userId: "12312321",
            name: "wee",
            email: "wee@mail.com",
            ppUrl: "https://placekitten.com/900/500",
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
        <TestCard
          data={{
            userId: "12312321",
            name: "wee",
            email: "wee@mail.com",
            ppUrl: "https://placekitten.com/900/500",
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
        <TestCard
          data={{
            userId: "12312321",
            name: "wee",
            email: "wee@mail.com",
            ppUrl: "https://placekitten.com/900/500",
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
      <div className="mb-20 flex flex-row items-center justify-center gap-16 bg-white px-2">
        {/* <ProgramCard id={0} title={"aaa"} type={"aaa"} funding={"aaa"} providerName={""} description={""} startTime="" endTime="" /> */}
      </div>
    </>
  );
};
