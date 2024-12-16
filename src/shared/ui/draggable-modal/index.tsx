import { FC, ReactNode, useState } from "react";

import { Rnd } from "react-rnd";
import { Transition } from "react-transition-group";

import { ANIMATION_DELAY } from "@/shared/config/constants.ts";
import { ModalProps, Portal } from "@/shared/ui";

import "./draggable-modal.scss";

interface DraggableModalProps extends ModalProps {
  defaultPosition?: { x: number; y: number };
  defaultSize?: { width: number; height: number };
  maxWidth?: number;
  maxHeight?: number;
  children: ReactNode;
}

export const DraggableModal: FC<DraggableModalProps> = ({
  defaultPosition = { x: 100, y: 100 },
  defaultSize = { width: 400, height: 300 },
  maxWidth = 800,
  maxHeight = 600,
  visible,
  children
}) => {
  const [size, setSize] = useState(defaultSize);
  const [position, setPosition] = useState(defaultPosition);

  return (
    <Portal container={document.body}>
      <Transition
        in={visible}
        timeout={ANIMATION_DELAY}
        mountOnEnter
        unmountOnExit
      >
        {(state) => (
          <Rnd
            default={{ ...defaultPosition, ...defaultSize }}
            position={position}
            size={size}
            className={`draggable-modal ${state}`}
            bounds="window"
            minWidth={300}
            maxWidth={maxWidth}
            minHeight={200}
            maxHeight={maxHeight}
            onDragStop={(_, { x, y }) => setPosition({ x, y })}
            onResizeStop={(_, _1, ref, _2, position) => {
              setSize({
                width: ref.offsetWidth,
                height: ref.offsetHeight
              });
              setPosition(position);
            }}
          >
            {children}
          </Rnd>
        )}
      </Transition>
    </Portal>
  );
};
