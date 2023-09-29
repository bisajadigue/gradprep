import { type HTMLInputTypeAttribute } from "react";

export interface InputProps {
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  inputType?: HTMLInputTypeAttribute;
  onClick?: () => void;
  // TODO: other props for html input
}
