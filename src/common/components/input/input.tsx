import { ChangeEvent, ReactElement, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

import { removeDuplicateWhitespaces } from "../../utils";
import LoaderPrimitive from "../loader-primitive";
import { InputProps } from "./types";

const Input = ({
  children,
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
  delay, //primitive implementation, won't work when user passes value param
  additionalClassName,
  ...props
}: InputProps): ReactElement => {
  const ref = useRef(null);

  const [loading, setLoading] = useState(false);
  const [inputTimeout, setInputTimeout] = useState<NodeJS.Timeout>();
  const [focused, setFocused] = useState(false);

  useOnClickOutside(ref, () => setFocused(false), "mouseup");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!delay) {
      if (onChange) onChange(e);
    } else {
      setLoading(true);
      clearTimeout(inputTimeout);
      if (onChange)
        setInputTimeout(
          setTimeout(
            (e) => {
              onChange(e);
              setLoading(false);
            },
            delay,
            e,
          ),
        );
    }
  };

  return (
    <div
      className={removeDuplicateWhitespaces(
        `flex flex-col gap-0.5 text-primary relative ${height} ${width}`,
      )}
      onClick={() => setFocused(true)}
      ref={ref}
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
          } ${Icon ? "pl-10 pr-3" : "p-3"} ${additionalClassName}
          ${loading ? "pr-10" : ""}`,
        )}
        value={value}
        defaultValue={defaultValue}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled}
        {...props}
      />
      {loading && (
        <LoaderPrimitive additionalClassName="absolute w-5 h-5 top-2 right-0" />
      )}
      {isError && errorMessage ? (
        <span className="pl-3 text-error text-xs font-semibold">
          {errorMessage}
        </span>
      ) : (
        <></>
      )}
      {focused && children}
    </div>
  );
};

export default Input;
