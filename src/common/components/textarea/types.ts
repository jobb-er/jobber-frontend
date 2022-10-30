import { ChangeEvent, TextareaHTMLAttributes } from "react";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value?: string;
  defaultValue?: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  width?: string;
  isError?: boolean;
  errorMessage?: string;
  label?: string;
  resizable?: boolean;
  disabled?: boolean;
  height?: string;
  additionalClassName?: string;
}
