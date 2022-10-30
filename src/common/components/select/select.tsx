import { ReactElement, useState } from "react";

import { ReactComponent as ArrowDownIcon } from "../../images/select/arrowDown.svg";
import { removeDuplicateWhitespaces } from "../../utils";
import { SelectProps } from "./types";

const Select = ({
  value,
  onChange,
  options,
  disabled = false,
  label,
  placeholder,
  isError,
  errorMessage,
  additionalClassName,
}: SelectProps): ReactElement => {
  const [expanded, setExpanded] = useState(false);

  const handleClickOption = (option: string): void => {
    onChange(option);
    setExpanded((prev) => !prev);
  };

  return (
    <div
      className={removeDuplicateWhitespaces(
        `flex flex-col gap-0.5 text-primary h-20 w-full ${additionalClassName}`,
      )}
    >
      {label ? (
        <span className="pl-3 text-xs font-semibold select-none">{label}</span>
      ) : (
        <></>
      )}
      <div className="relative">
        <button
          className={removeDuplicateWhitespaces(
            `relative bg-secondary-lightest rounded-xl
            h-9 py-1 px-3 w-full border focus:outline-none 
            ${isError ? "border-error" : "border-secondary-lightest"}`,
          )}
          type="button"
          disabled={disabled}
          onClick={() => setExpanded((prev) => !prev)}
        >
          <div className="flex items-center justify-between gap-10">
            <span className={value ? "" : "opacity-20"}>
              {value || placeholder}
            </span>
            <ArrowDownIcon
              className={removeDuplicateWhitespaces(
                `w-4 h-4 ${
                  expanded ? "transform rotate-180 duration-100" : ""
                } ${isError ? "text-error" : "text-primary"}`,
              )}
            />
          </div>
        </button>
        {expanded ? (
          <ul className="absolute z-10 mt-1 w-full bg-secondary-lightest rounded-xl">
            {options.map(
              (option: string): ReactElement => (
                <li
                  className="text-primary cursor-pointer hover:bg-primary hover:text-white rounded-xl px-4 py-1"
                  onClick={() => handleClickOption(option)}
                  key={option}
                >
                  {option}
                </li>
              ),
            )}
          </ul>
        ) : (
          <></>
        )}
      </div>
      {isError && errorMessage ? (
        <span className="pl-3 text-error text-xs font-semibold">
          {errorMessage}
        </span>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Select;
