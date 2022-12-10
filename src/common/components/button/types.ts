import { ButtonHTMLAttributes, ReactElement, MouseEventHandler } from "react";

export type ButtonVariants = "primary" | "secondary" | "error";

export interface ButtonProps<HTMLButtonElement>
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactElement | string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  variant?: ButtonVariants;
  additionalClassName?: string;
}
