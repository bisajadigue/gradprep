import { type InputProps } from "../Input/interface";
import { RiSearch2Line } from "react-icons/ri";

export const SearchInput: React.FC<InputProps> = ({
  placeholder,
  inputType,
  onClick,
  className,
}) => {
  return (
    <>
      <div
        className={`${className} flex h-fit w-full rounded-[15px] border-2 border-[#6d00f9] px-[36px] text-center bg-white`}
      >
        <input
          placeholder={placeholder || "Placeholder..."}
          type={inputType || "text"}
          className="z-10 py-[12px] w-full"
        />
        <button onClick={onClick} className="z-10">
          <RiSearch2Line
            color="black"
            size={24}
            className="my-auto active:scale-[80%]"
          />
        </button>
      </div>
    </>
  );
};
