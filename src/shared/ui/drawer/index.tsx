import { FC, ReactNode, useEffect } from "react";

import { Transition } from "react-transition-group";

import { ANIMATION_DELAY } from "@/shared/config/constants.ts";
import { useScrollLock } from "@/shared/hooks";
import { Portal } from "@/shared/ui";
import { Backdrop } from "@/shared/ui/backdrop";

import "./drawer.scss";

interface DrawerProps {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
}

export const Drawer: FC<DrawerProps> = ({
  visible,
  children,
  placement = "left",
  onClose
}) => {
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    if (!visible) return;

    lockScroll();

    return () => {
      unlockScroll();
    };
  }, [visible]);

  return (
    <Portal>
      <Transition
        in={visible}
        timeout={ANIMATION_DELAY}
        mountOnEnter
        unmountOnExit
      >
        {(state) => (
          <div className={`drawer ${state} drawer--${placement}`}>
            <Backdrop visible={visible} onClose={onClose} />
            <div className="drawer__wrapper">{children}</div>
          </div>
        )}
      </Transition>
    </Portal>
  );
};
