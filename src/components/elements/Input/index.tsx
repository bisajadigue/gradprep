import { type InputProps } from "./interface"

export const Input: React.FC<InputProps> = ({
  placeholder,
  inputType,
}) => {

  return (
    <>
      <input
        className="text-center rounded-[15px] border-2 border-[#6d00f9] py-[12px]"
        placeholder={placeholder || "Placeholder..."}
        type={inputType || "text"}
      />
    </>
  )
}