import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

import "./btn.scss";

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, BtnProps>((props, ref) => {
  const { children, type = "button", className = "" } = props;

  return (
    <button type={type} ref={ref} {...props} className={`btn ${className}`}>
      {children}
    </button>
  );
});
