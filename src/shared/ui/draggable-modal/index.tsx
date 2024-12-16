import { FC, ReactNode, useLayoutEffect, useState } from "react";

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
  defaultPosition = { x: 0, y: 0 },
  maxWidth = 800,
  maxHeight = 600,
  visible,
  children
}) => {
  const [size, setSize] = useState({ width: 400, height: 300 });
  const [position, setPosition] = useState(defaultPosition);

  useLayoutEffect(() => {
    const handleResize = () => {
      const newCenterX = (window.innerWidth - size.width) / 2;
      const newCenterY = (window.innerHeight - size.height) / 2;
      setPosition({ x: newCenterX, y: newCenterY });
    };

    handleResize();
  }, []);

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
            default={{ ...defaultPosition, ...size }}
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
