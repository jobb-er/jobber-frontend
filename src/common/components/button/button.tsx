import { ReactElement } from "react";

import { removeDuplicateWhitespaces } from "../../utils";
import { ButtonProps, ButtonVariants } from "./types";

const variants: Record<ButtonVariants, string> = {
  primary: "bg-action text-white",
  secondary: "bg-secondary-light text-action",
};

const Button = ({
  children,
  onClick,
  disabled = false,
  type = "button",
  variant = "primary",
  additionalClassName,
}: ButtonProps<HTMLButtonElement>): ReactElement => {
  const chosenVariant = variants[variant];

  return (
    <button
      className={removeDuplicateWhitespaces(
        `${chosenVariant} w-max px-8 py-1.5
        rounded-xl text-lg font-semibold hover:opacity-90
        focus:outline-none disabled:opacity-40
        ${additionalClassName}`,
      )}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
