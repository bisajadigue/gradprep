import Image from "next/image";
import { GenericCard } from "../GenericCard";
import { type MentorCardProps } from "./interface";
import { RiOpenArmFill, RiSuitcase2Fill } from "react-icons/ri";
import Link from "next/link";

export const HistoryCard: React.FC<MentorCardProps> = ({ className, data }) => {
  return (
    <>
      <GenericCard
        className={`${className} flex flex-row md:w-[200px] lg:w-[300px]`}
      >
        <Image
          src={data.ppUrl}
          alt={"wee"}
          width={260}
          height={260}
          className="mr-4 h-[100px] w-[120px] rounded-[15px] object-cover group-hover:scale-105"
        />
        <div className="flex flex-col">
          <h3>{data.name}</h3>
          <h4>Score: {data.email}</h4>
        </div>
      </GenericCard>
    </>
  );
};
