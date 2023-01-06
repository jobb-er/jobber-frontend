import {
  InputHTMLAttributes,
  ChangeEvent,
  FunctionComponent,
  SVGProps,
  MouseEventHandler,
  ReactElement,
} from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactElement | ReactElement[];
  value?: string | number;
  defaultValue?: string | number;
  name?: string;
  type?: "text" | "number" | "email" | "password";
  placeholder?: string;
  width?: string;
  isError?: boolean;
  errorMessage?: string;
  label?: string;
  delay?: number;
  Icon?: FunctionComponent<
    SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  height?: string;
  additionalClassName?: string;
}
