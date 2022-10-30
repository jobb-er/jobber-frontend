import {
  InputHTMLAttributes,
  ChangeEvent,
  FunctionComponent,
  SVGProps,
} from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string | number;
  defaultValue?: string | number;
  name?: string;
  type?: "text" | "number" | "email" | "password";
  placeholder?: string;
  width?: string;
  isError?: boolean;
  errorMessage?: string;
  label?: string;
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
