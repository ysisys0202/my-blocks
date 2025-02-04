import React, { forwardRef, SVGAttributes } from "react";
import { gray } from "@/constants/colors";
import { useIcon } from "./useIcon";

export type IconProps = {
  name:
    | "arrow"
    | "book"
    | "chevron"
    | "infomation"
    | "warning"
    | "star-filled"
    | "check"
    | "warning-triangle"
    | "heart"
    | "heart-filled"
    | "close";

  size?: number;
  color?: string;
} & SVGAttributes<SVGSVGElement>;

export type SvgrComponent = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string;
    titleId?: string;
    desc?: string;
    descId?: string;
  }
>;

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 24, color = gray[800], ...props }, ref) => {
    const { Icon } = useIcon(name);

    if (!Icon) {
      return null;
    }

    return (
      <Icon
        width={size}
        height={size}
        stroke={color}
        fill={color}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Icon;
