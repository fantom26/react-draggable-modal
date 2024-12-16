import { FC, ReactNode, Suspense, useEffect } from "react";

import { createPortal } from "react-dom";
import { Transition } from "react-transition-group";

import { ANIMATION_DELAY } from "@/shared/config/constants.ts";
import { useScrollLock } from "@/shared/hooks";
import { GlobalLoader } from "@/shared/ui/global-loader";

import "./modal.scss";

export interface ModalProps {
  visible: boolean;
  children: ReactNode;
  bodyClassName?: string;
  width?: number;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({
  visible,
  width = 58.5,
  bodyClassName,
  children,
  onClose
}) => {
  const { lockScroll, unlockScroll } = useScrollLock();

  const styles: Record<string, string> = {
    "--width": `${width}rem`
  };

  useEffect(() => {
    if (!visible) return;

    const isBodyLocked = document.body.classList.contains("lock");

    if (!isBodyLocked) {
      lockScroll();
    }

    return () => {
      if (!isBodyLocked) {
        unlockScroll();
      }
    };
  }, [visible]);

  return createPortal(
    <Transition
      in={visible}
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
          <div className="modal-wrapper">
            <div className="modal-content">
              <div
                className={
                  bodyClassName
                    ? `modal-content__body ${bodyClassName}`
                    : "modal-content__body"
                }
              >
                <Suspense fallback={<GlobalLoader loading={true} />}>
                  {children}
                </Suspense>
              </div>
              <button
                className="modal__close"
                aria-label="Close modal"
                onClick={onClose}
              ></button>
            </div>
          </div>
        </div>
      )}
    </Transition>,
    document.body
  );
};
