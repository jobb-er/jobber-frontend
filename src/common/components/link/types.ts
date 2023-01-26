export interface LinkProps {
  Icon?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  title: string;
  path?: string;
  onClick?: () => void;
  textSize?: `text-${string}`;
  textColor?: `text-${string}`;
  additionalClassName?: string;
}
