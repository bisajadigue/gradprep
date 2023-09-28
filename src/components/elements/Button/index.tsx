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
        className={`${className} inline-flex items-center px-[36px] py-[12px] relative bg-primary rounded-[15px] overflow-hidden active:bg-[#603994]`}>
          <p className="
            relative w-fit mt-[-1.00px] font-p-paragraph font-[number:var(--p-paragraph-font-weight)] text-white
          ">
            { children }
          </p>
      </button>
    </>
  )
}