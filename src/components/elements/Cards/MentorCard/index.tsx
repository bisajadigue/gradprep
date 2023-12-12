import Image from "next/image";
import { GenericCard } from "../GenericCard";
import { type MentorCardProps } from "./interface";
import {
  RiArrowRightLine,
  RiOpenArmFill,
  RiSuitcase2Fill,
} from "react-icons/ri";
import Link from "next/link";

export const MentorCard: React.FC<MentorCardProps> = ({ className, data }) => {
  return (
    <>
      <GenericCard
        className={`${className} flex w-[240px] flex-col text-black transition-all hover:-translate-y-1`}
      >
        <Image
          src={data.image!}
          alt={"mentor profile picture"}
          width={260}
          height={260}
          className="h-[200px] w-[240px] rounded-[10px] object-cover group-hover:scale-105"
        />
        <p className="mb-2 mt-1 font-bold">{data.name}</p>
        <div className="flex items-center gap-x-2 font-light">
          <RiSuitcase2Fill />
          <p>{data.education[0]?.degree}</p>
        </div>
        { data.mentor?.experiences && 
        <div className="flex items-center gap-x-2 font-light">
          <RiOpenArmFill />
          <p>{data.mentor.experiences[0]?.title}</p>
        </div> }
        <Link
          className="mb-1 ml-auto mt-7 flex w-fit items-center"
          href={`/mentors/${data.id}`}
        >
          Lihat Detail
          <RiArrowRightLine />
        </Link>
      </GenericCard>
    </>
  );
};
