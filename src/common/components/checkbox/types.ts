export interface CheckboxProps {
  isChecked: boolean;
  onCheck: (isChecked: boolean) => void;
  disabled?: boolean;
  label?: string;
  isError?: boolean;
  errorMessage?: string;
  additionalClassName?: string;
}
