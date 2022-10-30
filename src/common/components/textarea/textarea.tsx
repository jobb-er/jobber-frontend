import { ReactElement } from "react";

import { removeDuplicateWhitespaces } from "../../utils";
import { TextareaProps } from "./types";

const Textarea = ({
  value,
  defaultValue,
  name,
  placeholder,
  width = "w-full",
  isError,
  height,
  errorMessage,
  label,
  onChange,
  resizable = true,
  disabled = false,
  additionalClassName,
  ...props
}: TextareaProps): ReactElement => (
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
    <textarea
      className={removeDuplicateWhitespaces(`
          bg-secondary-lightest rounded-xl placeholder:opacity-40
          focus:outline-none w-full border p-3 ${
            isError ? "border-error" : "border-secondary-lightest"
          } ${resizable ? "" : "resize-none"} ${additionalClassName}
          `)}
      value={value}
      defaultValue={defaultValue}
      name={name}
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

export default Textarea;
