import { type GenericCardProps } from "./interface";

export const GenericCard: React.FC<GenericCardProps> = ({
  children,
  className
}) => {
  return (
    <>
      <div className={`${className} rounded-[15px] bg-white shadow-md shadow-gray-500 p-6 h-fit w-fit`}>
        {children}
      </div>
    </>
  )
}