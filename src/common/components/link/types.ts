export interface LinkProps {
  Icon?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  title: string;
  path: string;
  textSize?: `text-${string}`;
}
