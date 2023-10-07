import { type LabelProps } from "./interface";

export const Label: React.FC<LabelProps> = ({ children, className }) => {
  return (
    <>
      <span
        className={`${className}"text-sm rounded-xl bg-gray-300 px-4 py-1 align-middle font-medium text-black`}
      >
        {children}
      </span>
    </>
  );
};
