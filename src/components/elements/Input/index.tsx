import { type InputProps } from "./interface";

export const Input: React.FC<InputProps> = ({
  id,
  placeholder,
  inputType,
  className,
  value,
  name,
  onClick,
  onSubmit,
  onChange,
}) => {
  return (
    <>
      <input
        className={`${className} rounded-[15px] border-2 border-[#6d00f9] py-[12px] text-center`}
        placeholder={placeholder || "Placeholder..."}
        type={inputType || "text"}
        value={value}
        name={name}
        id={id}
        onClick={onClick}
        onSubmit={onSubmit}
        onChange={onChange}
      />
    </>
  );
};
