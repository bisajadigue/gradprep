import React from "react";
import { type ButtonProps } from "./interface";

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  variant,
  onClick,
  // leftIcon,
  // rightIcon,
  disabled,
  isLoading,
  type,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled || isLoading}
        type={type}
        className={`${className} relative inline-flex items-center overflow-hidden rounded-[15px] bg-primary px-[36px] py-[12px] text-white hover:border-2 hover:border-solid hover:border-primary hover:bg-white hover:text-primary active:bg-[#603994]`}
      >
        <p
          className="
            font-p-paragraph relative mt-[-1.00px] w-fit font-[number:var(--p-paragraph-font-weight)] 
          "
        >
          {children}
        </p>
      </button>
    </>
  );
};
