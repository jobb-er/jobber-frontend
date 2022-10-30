export interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  disabled?: boolean;
  label?: string;
  isError?: boolean;
  errorMessage?: string;
  placeholder?: string;
  additionalClassName?: string;
  Icon?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  height?: string;
}
