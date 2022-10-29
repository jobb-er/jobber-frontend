import { ReactElement } from "react";

import { removeDuplicateWhitespaces } from "../../utils";
import { InputProps } from "./types";

const Input = ({
  value,
  defaultValue,
  name,
  type,
  placeholder,
  width = "w-full",
  isError,
  errorMessage,
  label,
  onChange,
  disabled = false,
  additionalClassName,
  ...props
}: InputProps): ReactElement => (
  <div
    className={removeDuplicateWhitespaces(
      `flex flex-col gap-0.5 text-primary h-20 ${width}`,
    )}
  >
    {label ? (
      <span className="pl-3 text-xs font-semibold select-none">{label}</span>
    ) : (
      <></>
    )}
    <input
      className={removeDuplicateWhitespaces(
        `bg-secondary-lightest rounded-xl h-9 p-3 placeholder:opacity-40 focus:outline-none w-full border ${
          isError ? "border-error" : "border-secondary-lightest"
        } ${additionalClassName}`,
      )}
      value={value}
      defaultValue={defaultValue}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      {...props}
    />
    {isError && errorMessage ? (
      <span className="pl-3 text-error text-xs font-semibold">
        {errorMessage}
      </span>
    ) : (
      <></>
    )}
  </div>
);

export default Input;
