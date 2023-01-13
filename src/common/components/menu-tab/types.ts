import { FunctionComponent, ReactElement, SVGProps } from "react";

export interface MenuTabProps {
  children?: ReactElement | string;
  title: string;
  path?: string;
  Icon: FunctionComponent<
    SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  isActive: boolean;
  onClick?: () => void;
}
