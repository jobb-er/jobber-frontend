import { ReactElement } from "react";

interface SectionSeparatorProps {
  title?: string;
}

const SectionSeparator = ({ title }: SectionSeparatorProps): ReactElement => (
  <div className="flex flex-col gap-1 w-full text-action capitalize select-none">
    <span className="font-semibold">{title}</span>
    <div className="border-b border-action" />
  </div>
);

export default SectionSeparator;
