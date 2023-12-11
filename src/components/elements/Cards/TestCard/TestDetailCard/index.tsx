import { GenericCard } from "../../GenericCard";
import { Button } from "@/components/elements/Button";
import { TestDetailCardProps } from "./interface";
import Link from "next/link";

export const TestDetailCard: React.FC<TestDetailCardProps> = ({
  className,
}) => {
  return (
    <>
      <GenericCard
        className={`${className} mt-10 flex w-[300px] flex-col text-center md:mt-0 lg:mt-0`}
      >
        <h3 className="font-bold md:text-lg lg:text-xl">Waktu Pengerjaan</h3>
        <p>120 menit</p>
        <h3 className="font-bold md:text-lg lg:text-xl">Jumlah Pertanyaan</h3>
        <p>25 pertanyaan</p>
        <div className="my-3 justify-center text-center">
          <Link href={"/questions"} className="w-24 text-center">
            <h3 className="rounded-xl bg-slate-400 text-center text-blue-700">
              Mulai Tes
            </h3>
          </Link>
        </div>

        <p>Anda hanya bisa mengerjakan test ini satu buah kali.</p>
      </GenericCard>
    </>
  );
};
