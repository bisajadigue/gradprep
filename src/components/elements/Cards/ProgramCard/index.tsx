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
        className={`${className} flex w-[300px] transform flex-col transition-all duration-500 hover:scale-105`}
      >
        <div className="flex flex-row items-center gap-3">
          <div className="w-fit rounded-full bg-purple px-4 py-2 text-center font-bold text-white">
            S2
          </div>
          <div className="w-fit rounded-full bg-green p-3 text-center font-bold text-white">
            Fully Funded
          </div>
        </div>

        <h3 className="font-extrabold">Beasiswa LPDP</h3>
        <h3 className="font-thin">Kemendikbud</h3>
        <div className="w-full rounded-xl bg-lightpurple p-5">
          <div className="flex flex-row gap-7">
            <p>Mulai Registrasi</p>
            <p>12 Juni 2025, 00.30 WIB</p>
          </div>
          <div className="flex flex-row gap-7">
            <p>Tenggat Waktu</p>
            <p>25 Juni 2025, 00.30 WIB</p>
          </div>
        </div>
        <div className="flex justify-end">
          <Button className="mt-4 w-fit" variant={"primary"} size={"md"}>
            Lihat detail
          </Button>
        </div>
      </GenericCard>
    </>
  );
};
