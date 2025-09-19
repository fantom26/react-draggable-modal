import { ElementType, HTMLAttributes, ReactNode, forwardRef } from "react";

import "./typography.scss";

enum TypographyColors {
  BLACK = "black",
  GREY = "grey",
  PURPLE = "purple",
  WHITE = "white"
}

const TypographyColorsClasses = {
  [TypographyColors.BLACK]: `${TypographyColors.BLACK}`,
  [TypographyColors.GREY]: `${TypographyColors.GREY}`,
  [TypographyColors.PURPLE]: `${TypographyColors.PURPLE}`,
  [TypographyColors.WHITE]: `${TypographyColors.WHITE}`
};

enum TypographyVariant {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  BODY1 = "body1",
  CAPTION = "caption"
}

const TypographyVariantClasses = {
  [TypographyVariant.H1]: `${TypographyVariant.H1}`,
  [TypographyVariant.H2]: `${TypographyVariant.H2}`,
  [TypographyVariant.H3]: `${TypographyVariant.H3}`,
  [TypographyVariant.H4]: `${TypographyVariant.H4}`,
  [TypographyVariant.H5]: `${TypographyVariant.H5}`,
  [TypographyVariant.CAPTION]: `${TypographyVariant.CAPTION}`,
  [TypographyVariant.BODY1]: `${TypographyVariant.BODY1}`
};

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  tag?: ElementType;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "body1" | "caption";
  center?: boolean;
  color?: "black" | "grey" | "purple" | "white";
  children: ReactNode;
}

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  (
    {
      tag: Tag = "span",
      center = false,
      color = "black",
      variant = "body1",
      children,
      className = "",
      ...rest
    },
    ref
  ) => {
    const generateClasses = () => {
      let defaultClassName = `typography ${TypographyVariantClasses[variant]} ${TypographyColorsClasses[color]}`;

      if (center) {
        defaultClassName += " center";
      }

      if (className) {
        defaultClassName += ` ${className}`;
      }
      return defaultClassName;
    };

    return (
      <Tag ref={ref} className={generateClasses()} {...rest}>
        {children}
      </Tag>
    );
  }
);
