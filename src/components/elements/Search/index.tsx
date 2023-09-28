import { type InputProps } from "../Input/interface"
import { RiSearch2Line } from "react-icons/ri";

export const SearchInput: React.FC<InputProps> = ({
  placeholder,
  inputType,
  onClick,
  className
}) => {

  return (
    <>
      <div className={`${className} w-full flex text-center rounded-[15px] border-2 border-[#6d00f9] h-fit px-[36px]`}>
        <input
          placeholder={placeholder || "Placeholder..."}
          type={inputType || "text"}
          className="py-[12px] z-10"
        />
        <button onClick={onClick} className="z-10">
          <RiSearch2Line color="black" size={24} className="my-auto active:scale-[80%]"/>
        </button>
      </div>
    </>
  )
}