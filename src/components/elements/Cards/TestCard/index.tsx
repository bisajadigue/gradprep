import Image from "next/image";
import { GenericCard } from "../GenericCard";
import { RiOpenArmFill, RiSuitcase2Fill } from "react-icons/ri";
import Link from "next/link";
import { Label } from "../../Label";
import { ITest } from "./interface";
import { Button } from "../../Button";

export const TestCard: React.FC<ITest> = ({
  className,
  slug,
  title,
  description,
  resources,
}) => {
  return (
    <>
      <GenericCard
        className={`${className} flex w-[308px] flex-col md:w-[350px] lg:w-[350px]`}
      >
        {/* <div>IELTS</div>
        <p>
          kerjakeun ielts sampe native bisa banget dong, yuk buka2, meuni
          gratis, sia pasti bisa
        </p>
        <p>campbell, thinkjava2, erlangga, kemendikbud, pacil</p> */}

        <div className="flex flex-row items-center justify-start gap-6">
          {/* <Image
            src={data.ppUrl}
            width={36}
            height={36}
            alt="profile picture"
            className="h-[90px] w-[90px] rounded-full md:h-[120px] md:w-[120px] lg:h-[120px] lg:w-[120px]"
          /> */}
          <h4 className="text-xl font-bold">{title}</h4>
        </div>
        <div className="my-4 flex w-20 flex-col gap-2">
          <Label>XXX</Label>
          <Label>XXX</Label>
        </div>

        <div className="flex items-center gap-x-2">
          <p>{description}</p>
        </div>
        <div className="flex items-center gap-x-2">
          <p>{resources}</p>
        </div>
        <Button
          className="mt-4 flex w-fit justify-end text-sm text-white hover:border-2 hover:border-solid hover:border-primary hover:bg-white lg:text-lg"
          variant={"primary"}
          size={"md"}
        >
          <a
            href={`http://localhost:3000/tests/${slug}`}
            className="hover:text-primary "
          >
            Lihat detail
          </a>
        </Button>
      </GenericCard>
    </>
  );
};
