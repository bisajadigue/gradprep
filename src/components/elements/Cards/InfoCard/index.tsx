import Image from "next/image";
import { GenericCard } from "../GenericCard";
import { RiOpenArmFill, RiSuitcase2Fill } from "react-icons/ri";
import Link from "next/link";
import { InfoCardProps } from "./interface";
import { BsFillCheckCircleFill } from "react-icons/bs";

export const InfoCard: React.FC<InfoCardProps> = ({ className }) => {
  return (
    <>
      <GenericCard
        className={`${className} flex w-[300px] flex-col lg:w-[1100px]`}
      >
        <h3 className="mb-3">
          Kenapa harus ikut IELTS Prediction Test dengan GradPrep?
        </h3>
        <p className="my-2 flex items-center gap-2">
          <BsFillCheckCircleFill size={25} />
          Praktis karena tes dilakukan secara online melalui platform GradPrep
        </p>
        <p className="flex items-center gap-2">
          <BsFillCheckCircleFill size={25} />
          Praktis karena tes dilakukan secara online melalui platform GradPrep
        </p>
        <p className="my-2 flex items-center gap-2">
          <BsFillCheckCircleFill size={25} />
          Praktis karena tes dilakukan secara online melalui platform GradPrep
        </p>
        <p className="flex items-center gap-2">
          <BsFillCheckCircleFill size={25} />
          Praktis karena tes dilakukan secara online melalui platform GradPrep
        </p>
      </GenericCard>
    </>
  );
};
