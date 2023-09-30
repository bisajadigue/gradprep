import Image from "next/image";
import { GenericCard } from "../GenericCard";
import { type MentorCardProps } from "./interface";
import { RiOpenArmFill, RiSuitcase2Fill } from "react-icons/ri";
import Link from "next/link";

export const MentorCard: React.FC<MentorCardProps> = ({
  className,
  data
}) => {
  return (
    <>
        <GenericCard className={`${className} w-[300px] flex flex-col hover:-translate-y-2 transition-all`}>
          <Image
            src={data.ppUrl} 
            alt={"wee"}        
            width={260}
            height={260}
            className="rounded-[15px] w-[260px] h-[200px] object-cover group-hover:scale-105"
          />
          <h3>{data.name}</h3>
          <div className="flex items-center gap-x-2">
            <RiSuitcase2Fill />
            <p>{data.experiences[0]?.title}</p>
          </div>
          <div className="flex items-center gap-x-2">
            <RiOpenArmFill />
            <p>{data.expertise}</p>
          </div>
        </GenericCard>
    </>
  )
}