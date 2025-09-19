import { FC, Key, ReactNode, ReactPortal } from "react";

import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  domNode?: Element | DocumentFragment;
  key?: Key | null;
}

export const Portal: FC<PortalProps> = ({
  children,
  domNode = document.body,
  key = null
}): ReactPortal => createPortal(children, domNode, key);
