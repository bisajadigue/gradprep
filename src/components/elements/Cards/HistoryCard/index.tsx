import Image from "next/image";
import { GenericCard } from "../GenericCard";
import { type MentorCardProps } from "./interface";
import { RiOpenArmFill, RiSuitcase2Fill } from "react-icons/ri";
import Link from "next/link";

export const HistoryCard: React.FC<MentorCardProps> = ({ className, data }) => {
  return (
    <>
      <GenericCard
        className={`${className} flex w-[300px] flex-row transition-all hover:-translate-y-2`}
      >
        <Image
          src={data.ppUrl}
          alt={"wee"}
          width={260}
          height={260}
          className="h-[90px] w-[100px] rounded-[15px] object-cover group-hover:scale-105"
        />
        <h3>{data.name}</h3>
      </GenericCard>
    </>
  );
};
