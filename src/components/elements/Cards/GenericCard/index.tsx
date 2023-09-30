import { type GenericCardProps } from "./interface";

export const GenericCard: React.FC<GenericCardProps> = ({
  children,
  className,
}) => {
  return (
    <>
      <div
        className={`${className} h-fit w-fit rounded-[15px] bg-white p-6 shadow-md shadow-gray-500`}
      >
        {children}
      </div>
    </>
  );
};
