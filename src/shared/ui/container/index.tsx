import { FC, ReactNode } from "react";

import "./container.scss";

interface ContainerProps {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => <div className="container"> {children} </div>;
