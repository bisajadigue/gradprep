import Image from "next/image";
import { Button } from "@/components/elements";
import { GrNext, GrPrevious } from "react-icons/gr";
import { AiOutlineCheck } from "react-icons/ai";
import { Label } from "@/components/elements/Label";
import { Breadcrumb } from "flowbite-react";

export const QuestionModule: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <div
        className=" relative flex h-full flex-col items-center justify-center pt-40 text-white md:flex-row md:pt-60 lg:pt-60"
        style={{
          backgroundImage: `url(/hero.svg)`,
          backgroundSize: "cover", // Sesuaikan sesuai kebutuhan Anda
          backgroundPosition: "center", // Sesuaikan sesuai kebutuhan Anda
        }}
      >
        <div className="justify-left container flex flex-col items-center sm:relative md:absolute md:flex-row lg:absolute lg:flex-row">
          <Image
            className="mr-5 h-[190px] w-[200px] rounded-[15px] object-cover group-hover:scale-105"
            src={"/assets/logo/fulbright-logo.png"}
            alt={""}
            width={300}
            height={300}
          />
          <div className="px-3 text-left">
            {/* <div className=" absolute -left-32 -top-48 z-0 h-[80vh] w-[80vh] rounded-full bg-[#5056ED]/[.42]"></div>
            <div className=" absolute -left-40 top-64 z-0 h-[50vh] w-[50vh] rounded-full bg-[#111692]/[.42]"></div>
            <div className=" absolute -right-48 bottom-12 z-0 h-[40vh] w-[40vh] rounded-full bg-[#111692]/[.42]"></div>
            <div className=" absolute -bottom-56 -right-24 z-0 h-[64vh] w-[64vh] rounded-full bg-[#946CE8]/[.62]"></div> */}
            <h2 className="pt-5 text-xl tracking-wide md:pt-12 md:text-3xl lg:pt-12 lg:text-4xl">
              Ujian Simulasi IELTS 2022
            </h2>
            <div className="text-white md:text-black lg:text-black">
              <div className="mt-3 flex items-center justify-between">
                <p>Sisa waktu:</p>
                <Label> 12:55</Label>
              </div>

              <div className="mb-5 mt-3 flex items-center justify-between">
                <p>Pertanyaan terjawab:</p>
                <Label>19/20</Label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-3 flex justify-center pl-0 pt-0 md:justify-start md:pl-72 md:pt-20 lg:ml-6 lg:justify-start lg:pt-20">
        <Button variant={"primary"} size={"md"}>
          Kumpulkan
          <AiOutlineCheck
            color="white"
            size={24}
            className="my-auto active:scale-[80%]"
          />
        </Button>
      </div>
      <div className="px-10 pt-10 md:px-20 md:pt-20 lg:px-20 lg:pt-20">
        <div>
          <h3 className="mb-4 text-center">Question 1/5</h3>
          <p>
            Guy Bailey, Roy Hackett and Paul Stephenson made history in 1963, as
            part of a protest against a bus company that refused to employ black
            and Asian drivers in which UK city? Pertanyaan ini bisa dibuat lebih
            panjang lagi tapi gue sedang malas.{" "}
          </p>
          <p className="mt-5">Pilih jawaban yang paling tepat.</p>
        </div>
        <div>
          <div className="flex flex-col justify-start">
            <div className="flex flex-col justify-start">
              <label className="mt-3 inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-gray-600"
                  checked={false}
                />
                <span className="ml-2 text-gray-700">label</span>
              </label>

              <label className="mt-3 inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-red-600"
                  checked={true}
                />
                <span className="ml-2 text-gray-700">label</span>
              </label>

              <label className="mt-3 inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-orange-600"
                  checked={false}
                />
                <span className="ml-2 text-gray-700">label</span>
              </label>

              <label className="mt-3 inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-yellow-600"
                  checked={false}
                />
                <span className="ml-2 text-gray-700">label</span>
              </label>
            </div>
          </div>
        </div>
        <div className="my-10 flex items-center justify-between gap-5">
          {" "}
          <Button variant={"primary"} size={"md"}>
            <GrPrevious
              fill="white"
              color="white"
              size={24}
              className="my-auto active:scale-[80%]"
            />
            Previous
          </Button>
          <Button variant={"primary"} size={"md"}>
            Next
            <GrNext
              color="white"
              size={24}
              className="my-auto active:scale-[80%]"
            />
          </Button>
        </div>
      </div>
    </>
  );
};
