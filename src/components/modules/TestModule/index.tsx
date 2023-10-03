import Lottie from "lottie-react";
import Value from "../../../../public/assets/lottie/value.json";
import Value1 from "../../../../public/assets/lottie/value1.json";
import Value2 from "../../../../public/assets/lottie/value2.json";
import Value3 from "../../../../public/assets/lottie/value3.json";
import Value4 from "../../../../public/assets/lottie/value4.json";

import Test from "../../../../public/assets/lottie/test.json";
import { ProgramCard } from "@/components/elements/Cards/ProgramCard";
import { Button, SearchInput } from "@/components/elements";
import { RiFilter3Line } from "react-icons/ri";
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
            <h2 className="text-2xl tracking-wide md:text-3xl lg:text-4xl">
              Taklukkan semua tes dan bangun masa depanmu yang lebih cerah.
            </h2>
          </div>
          <Lottie
            className=" w-80 md:w-[660px] lg:w-[680px]"
            animationData={Test}
          />
        </div>
      </div>

      <div className="w-3/4">{/* history */}</div>

      <div className="flex justify-center">
        <div className="bg-lilac  w-3/4  rounded-xl p-6 text-center">
          <h3 className="mb-16">Keunggulan Prep Test di GradPrep</h3>
          <div className="flex flex-wrap gap-10">
            <div className="flex w-1/3 flex-col justify-center rounded-xl bg-white text-center">
              <div className="flex justify-center">
                <Lottie className="-mt-14 w-32" animationData={Value} />
              </div>
              <h4>Kurikulum Terpercaya</h4>
              <p>
                Penerapan kurikulum Cambridge dan Collins bantu raih skor
                tinggi.
              </p>
            </div>
            <div className="flex w-1/3 flex-col justify-center rounded-xl bg-white text-center">
              <div className="flex justify-center">
                <Lottie className="-mt-14 w-32" animationData={Value1} />
              </div>
              <h4>Tutor Berpengalaman</h4>
              <p>Kamu akan dibimbing oleh Tutor berpengalaman.</p>
            </div>
            <div className="flex w-1/3 flex-col justify-center rounded-xl bg-white text-center">
              <div className="flex justify-center">
                <Lottie className="-mt-14 w-32" animationData={Value2} />
              </div>
              <h4>Jadwal Fleksibel</h4>
              <p>
                Bebas tentukan jadwal bimbingan sesuai kesepakatan dengan tutor.
              </p>
            </div>
            <div className="flex w-1/3 flex-col justify-center rounded-xl bg-white text-center">
              <div className="flex justify-center">
                <Lottie className="-mt-14 w-32" animationData={Value3} />
              </div>
              <h4>Dibimbing secara 1-on-1</h4>
              <p>
                Kamu akan dibimbing oleh Tutor secara privat sesuai materi yang
                kamu pelajari.
              </p>
            </div>
            <div className="flex w-1/3 flex-col justify-center rounded-xl bg-white text-center">
              <div className="flex justify-center">
                <Lottie className="-mt-14 w-32" animationData={Value4} />
              </div>
              <h4>Gratis Simulasi Tes </h4>
              <p>
                Kesempatan untuk dapat tes simulasi gratis untuk mengetahui
                progress belajar.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="px-44">IELTS</h2>
      <div className="mb-10 flex flex-row items-center justify-center gap-16 bg-white px-2">
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

        {/* <TestCard id={0} title={"aaa"} type={"aaa"} funding={"aaa"} providerName={""} description={""} startTime="" endTime="" /> */}
      </div>

      <h2 className="px-44">SAT</h2>
      <div className="mb-10 flex flex-row items-center justify-center gap-16 bg-white px-2">
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
