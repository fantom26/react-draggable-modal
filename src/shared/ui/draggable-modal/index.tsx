import { FC, ReactNode, useLayoutEffect, useState } from "react";

import { Rnd, RndDragCallback, RndResizeCallback } from "react-rnd";

import { CloseButton, ModalProps, Portal } from "@/shared/ui";

import "./draggable-modal.scss";

interface DraggableModalProps extends ModalProps {
  defaultPosition?: { x: number; y: number };
  defaultSize?: { width: number; height: number };
  maxWidth?: number;
  maxHeight?: number;
  children: ReactNode;
  title?: string;
}

export const DraggableModal: FC<DraggableModalProps> = ({
  defaultPosition = { x: 0, y: 0 },
  maxWidth = 800,
  maxHeight = 1000,
  title,
  onClose,
  children
}) => {
  const [size, setSize] = useState({ width: 400, height: 650 });
  const [position, setPosition] = useState(defaultPosition);

  const onDragStop: RndDragCallback = (_e, { x, y }) => {
    setPosition((prev) => ({ ...prev, x, y }));
  };

  const onResize: RndResizeCallback = (
    _e,
    _direction,
    ref,
    _delta,
    position
  ) => {
    setSize({
      width: ref.offsetWidth,
      height: ref.offsetHeight
    });
    setPosition(position);
  };

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
      <Rnd
        default={{ ...defaultPosition, ...size }}
        position={position}
        size={size}
        className="draggable-modal"
        bounds="window"
        minWidth={300}
        maxWidth={maxWidth}
        minHeight={200}
        maxHeight={maxHeight}
        onDragStop={onDragStop}
        onResizeStop={onResize}
      >
        <div className="draggable-modal__content scroll">
          <div className="draggable-modal__header">
            <h3>{title}</h3>
            <CloseButton onClick={onClose} aria-label="Close draggable modal" />
          </div>
          {children}
        </div>
      </Rnd>
    </Portal>
  );
};
