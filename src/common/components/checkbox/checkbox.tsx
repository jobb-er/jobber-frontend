import { ReactElement } from "react";

import { ReactComponent as CheckmarkIcon } from "../../images/checkbox/checkmark.svg";
import { removeDuplicateWhitespaces } from "../../utils";
import { CheckboxProps } from "./types";

const Checkbox = ({
  onCheck,
  isChecked,
  disabled = false,
  label,
  isError,
  errorMessage,
  additionalClassName,
}: CheckboxProps): ReactElement => (
  <div
    className={removeDuplicateWhitespaces(
      `flex flex-col gap-1 w-full h-10 ${additionalClassName}`,
    )}
  >
    <div className="flex item-center gap-2">
      <button
        className={removeDuplicateWhitespaces(`
            w-5 h-5 border-2 rounded-xl cursor-pointer
            ${
              isChecked
                ? "bg-primary border-primary"
                : "bg-white border-secondary-light "
            }
            ${disabled ? "opacity-60 cursor-not-allowed" : ""}`)}
        disabled={disabled}
        onClick={() => onCheck(!isChecked)}
      >
        {isChecked && (
          <CheckmarkIcon className="text-white w-full h-full rounded-lg p-1" />
        )}
      </button>
      {label ? <span className="select-none text-sm">{label}</span> : <></>}
    </div>
    {isError && errorMessage ? (
      <span className="text-error text-xs font-semibold">{errorMessage}</span>
    ) : (
      <></>
    )}
  </div>
);

export default Checkbox;
