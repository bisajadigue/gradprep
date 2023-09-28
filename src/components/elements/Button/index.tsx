import React from 'react'
import { type ButtonProps } from './interface'

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
        className={`${className} inline-flex items-center px-[36px] py-[12px] relative bg-[#6d00f9] rounded-[15px] overflow-hidden active:bg-[#603994]`}>
          <p className="
            relative w-fit mt-[-1.00px] font-p-paragraph font-[number:var(--p-paragraph-font-weight)] text-white text-[length:var(--p-paragraph-font-size)] text-center tracking-[var(--p-paragraph-letter-spacing)] leading-[var(--p-paragraph-line-height)] [font-style:var(--p-paragraph-font-style)]
          ">
            { children }
          </p>
      </button>
    </>
  )
}