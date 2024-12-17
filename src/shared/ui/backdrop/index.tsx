import { FC } from "react";

import { Transition } from "react-transition-group";

import { ANIMATION_DELAY } from "@/shared/config/constants.ts";

import "./backdrop.scss";

interface BackdropProps {
  visible: boolean;
  onClose: () => void;
}

export const Backdrop: FC<BackdropProps> = ({ visible, onClose }) => {
  return (
    <Transition
      in={visible}
      timeout={ANIMATION_DELAY}
      mountOnEnter
      unmountOnExit
    >
      {(state) => (
        <div className={`backdrop ${state}`.trim()} onClick={onClose}></div>
      )}
    </Transition>
  );
};
