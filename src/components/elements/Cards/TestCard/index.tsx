import Image from "next/image";
import { GenericCard } from "../GenericCard";
import { type MentorCardProps } from "./interface";
import { RiOpenArmFill, RiSuitcase2Fill } from "react-icons/ri";
import Link from "next/link";
import { Label } from "../../Label";

export const TestCard: React.FC<MentorCardProps> = ({ className, data }) => {
  return (
    <>
      <GenericCard
        className={`${className} flex w-[308px] flex-col md:w-[350px] lg:w-[350px]`}
      >
        <div className="flex flex-row items-center justify-start gap-6">
          <Image
            src={data.ppUrl}
            width={36}
            height={36}
            alt="profile picture"
            className="h-[90px] w-[90px] rounded-full md:h-[120px] md:w-[120px] lg:h-[120px] lg:w-[120px]"
          />
          <h4 className="text-xl font-bold">{data.name}</h4>
        </div>
        <div className="my-4 flex w-20 flex-col gap-2">
          <Label>XXX</Label>
          <Label>XXX</Label>
        </div>

        <div className="flex items-center gap-x-2">
          <p>{data.experiences[0]?.title}</p>
        </div>
        <div className="flex items-center gap-x-2">
          <p>{data.expertise}</p>
        </div>
      </GenericCard>
    </>
  );
};
