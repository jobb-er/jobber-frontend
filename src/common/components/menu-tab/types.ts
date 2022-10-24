import { FunctionComponent, SVGProps } from "react";

export interface MenuTabProps {
  title: string;
  path?: string;
  Icon: FunctionComponent<
    SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  isActive: boolean;
}
