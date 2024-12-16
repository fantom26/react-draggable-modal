import { FC, useState } from "react";

import { Rnd } from "react-rnd";

import { Modal, ModalProps } from "@/shared/ui";

interface DraggableModalProps extends ModalProps {
  defaultPosition?: { x: number; y: number };
  defaultSize?: { width: number; height: number };
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
}

export const DraggableModal: FC<DraggableModalProps> = ({
  defaultPosition = { x: 100, y: 100 },
  defaultSize = { width: 400, height: 300 },
  minWidth = 300,
  maxWidth = 800,
  minHeight = 200,
  maxHeight = 600,
  children,
  ...rest
}) => {
  const [size, setSize] = useState(defaultSize);
  const [position, setPosition] = useState(defaultPosition);

  return (
    <Modal {...rest}>
      <Rnd
        default={{ ...defaultPosition, ...defaultSize }}
        position={position}
        size={size}
        bounds="window"
        minWidth={minWidth}
        maxWidth={maxWidth}
        minHeight={minHeight}
        maxHeight={maxHeight}
        onDragStop={(_, data) => setPosition({ x: data.x, y: data.y })}
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
    </Modal>
  );
};
