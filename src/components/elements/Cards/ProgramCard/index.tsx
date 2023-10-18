import Image from "next/image";
import { GenericCard } from "../GenericCard";
import { RiOpenArmFill, RiSuitcase2Fill } from "react-icons/ri";
import Link from "next/link";
import { type IProgram } from "./interface";
import { Button } from "../../Button";

export const ProgramCard: React.FC<IProgram> = ({
  className,
  title,
  type,
  funding,
  providerName,
  description,
  //   startTime,
  //   endTime,
}) => {
  return (
    <>
      <GenericCard
        // className={`${className} flex w-[300px] cursor-pointer flex-col hover:-translate-y-[0.5rem] hover:shadow-xl`}
        className={`${className} flex w-[290px] transform flex-col transition-all duration-500 hover:scale-105 lg:w-[340px]`}
      >
        <div className="flex flex-row items-center gap-3">
          <div className="w-fit rounded-full bg-purple px-4 py-2 text-center text-sm font-bold text-white">
            S2
          </div>
          <div className="w-fit rounded-full bg-green p-2 text-center text-sm font-bold text-white lg:p-3">
            Fully Funded
          </div>
        </div>

        <h3 className="text-xl font-extrabold lg:text-3xl">Beasiswa LPDP</h3>
        <h3 className="text-lg font-thin lg:text-2xl">Kemendikbud</h3>
        <div className="my-3 w-full rounded-xl bg-lightpurple p-5">
          <div className="flex flex-row gap-7 text-sm lg:text-lg">
            <p>Mulai Registrasi</p>
            <p>12 Juni 2025, 00.30 WIB</p>
          </div>
          <div className="mt-4 flex flex-row gap-7 text-sm lg:text-lg">
            <p>Tenggat Waktu</p>
            <p>25 Juni 2025, 00.30 WIB</p>
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            className="mt-4 flex w-fit justify-end text-sm text-white hover:border-2 hover:border-solid hover:border-primary hover:bg-white lg:text-lg"
            variant={"primary"}
            size={"md"}
          >
            <a
              href="http://localhost:3000/programs/1"
              className="hover:text-primary "
            >
              Lihat detail
            </a>
          </Button>
        </div>
      </GenericCard>
    </>
  );
};
