import { FC, ReactNode, useEffect } from "react";

import { Transition } from "react-transition-group";

import { ANIMATION_DELAY } from "@/shared/config/constants.ts";
import { useScrollLock } from "@/shared/hooks";
import { CloseButton, Portal } from "@/shared/ui";
import { Backdrop } from "@/shared/ui/backdrop";

import "./modal.scss";

interface IWrapper {
  children: ReactNode;
}

export interface ModalProps extends IWrapper {
  open: boolean;
  width?: number;
  onClose: () => void;
}

interface HeaderProps extends IWrapper {
  onClose: () => void;
}

export const ModalHeader = ({ children, onClose }: HeaderProps) => {
  return (
    <div className="modal__header">
      {children}
      <CloseButton onClick={onClose} aria-label="Close modal" />
    </div>
  );
};

export const ModalRoot: FC<ModalProps> = ({
  children,
  open,
  onClose,
  width = 58.5
}) => {
  const { lockScroll, unlockScroll } = useScrollLock();

  const styles: Record<string, string> = {
    "--width": `${width}rem`
  };

  useEffect(() => {
    if (!open) {
      return;
    }

    const isBodyLocked = document.body.classList.contains("lock");

    if (!isBodyLocked) {
      lockScroll();
    }

    return () => {
      if (!isBodyLocked) {
        unlockScroll();
      }
    };
  }, [open]);

  return (
    <Portal domNode={document.body}>
      <Transition
        in={open}
        timeout={ANIMATION_DELAY}
        mountOnEnter
        unmountOnExit
      >
        {(state) => (
          <div
            style={styles}
            className={`modal ${state}`}
            role="dialog"
            aria-modal="true"
          >
            <Backdrop visible={open} onClose={onClose} />
            <div className="modal__container">
              <div className="modal__root">{children}</div>
            </div>
          </div>
        )}
      </Transition>
    </Portal>
  );
};

export const ModalContent = ({ children }: IWrapper) => (
  <div className="modal__content">{children}</div>
);

export const ModalActions = ({ children }: IWrapper) => (
  <div className="modal__actions">{children}</div>
);
