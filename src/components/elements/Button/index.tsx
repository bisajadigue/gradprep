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
        className={`
          ${className} relative inline-flex gap-x-2 items-center overflow-hidden rounded-[15px] px-[36px] py-[12px] 
          ${variant === 'primary' ? 'bg-primary  active:bg-[#603994] text-white' : ''}
          ${variant === 'white' ? 'bg-white  active:bg-gray-100 border border-primary text-primary' : ''}
        `}
      >
        {children}
      </button>
    </>
  );
};
