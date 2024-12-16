import { ButtonHTMLAttributes } from "react";

import "./close-button.scss";

export const CloseButton = ({
  onClick,
  className = "",
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`close-button ${className}`.trim()}
      onClick={onClick}
      {...rest}
    ></button>
  );
};
