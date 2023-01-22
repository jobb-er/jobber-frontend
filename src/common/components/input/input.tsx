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
  height = "h-20",
  Icon,
  additionalClassName,
  ...props
}: InputProps): ReactElement => (
  <div
    className={removeDuplicateWhitespaces(
      `flex flex-col gap-0.5 text-primary relative ${height} ${width}`,
    )}
  >
    {label ? (
      <span className="pl-3 text-xs font-semibold select-none">{label}</span>
    ) : (
      <></>
    )}
    {Icon ? <Icon className="absolute w-5 h-5 top-2 left-3" /> : <></>}
    <input
      className={removeDuplicateWhitespaces(
        `bg-secondary-lightest rounded-xl h-9
        placeholder:opacity-40 focus:outline-none
        w-full disabled:opacity-40 border ${
          isError ? "border-error" : "border-secondary-lightest"
        } ${Icon ? "pl-10 pr-3" : "p-3"} ${additionalClassName}`,
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
