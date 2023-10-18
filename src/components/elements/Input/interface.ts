import { type HTMLInputTypeAttribute } from "react";

export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string
  inputType?: HTMLInputTypeAttribute
  onClick?: () => void;
}
