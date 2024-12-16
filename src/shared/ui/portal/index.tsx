import { FC, ReactNode } from "react";

import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  container: Element | DocumentFragment;
}

export const Portal: FC<PortalProps> = ({ children, container }) =>
  createPortal(children, container);
