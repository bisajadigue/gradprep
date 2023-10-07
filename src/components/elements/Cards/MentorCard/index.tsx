import Image from "next/image";
import { GenericCard } from "../GenericCard";
import { type MentorCardProps } from "./interface";
import { RiArrowRightLine, RiOpenArmFill, RiSuitcase2Fill } from "react-icons/ri";
import Link from "next/link";

export const MentorCard: React.FC<MentorCardProps> = ({ className, data }) => {
  return (
    <>
      <GenericCard
        className={`${className} flex w-[240px] flex-col transition-all hover:-translate-y-1 text-black`}
      >
        <Image
          src={data.image!}
          alt={"mentor profile picture"}
          width={260}
          height={260}
          className="h-[200px] w-[240px] rounded-[10px] object-cover group-hover:scale-105"
        />
        <p className="font-bold mt-1 mb-2">{data.name}</p>
        <div className="flex items-center gap-x-2 font-light">
          <RiSuitcase2Fill />
          {/* <p>{data.experiences[0]?.title}</p> */}
          <p>Magister Ilmu Komputer</p>
        </div>
        <div className="flex items-center gap-x-2 font-light">
          <RiOpenArmFill />
          {/* <p>{data.}</p> */}
          {/* <p>Information Retrieval</p> */}
        </div>
        <Link className="w-fit mt-7 mb-1 ml-auto flex items-center" href={`/mentors/${data.id}`}>
          Lihat Detail
          <RiArrowRightLine />
        </Link>
      </GenericCard>
    </>
  );
};
