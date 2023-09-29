import { type InputProps } from "./interface";

export const Input: React.FC<InputProps> = ({
  placeholder,
  inputType,
  onClick,
  className,
}) => {
  return (
    <>
      <input
        className={`${className} rounded-[15px] border-2 border-[#6d00f9] py-[12px] text-center`}
        placeholder={placeholder || "Placeholder..."}
        type={inputType || "text"}
      />
    </>
  );
};
