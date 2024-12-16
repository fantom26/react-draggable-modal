import { useState } from "react";

import { Button, Container, DraggableModal, Modal } from "@/shared/ui";

import "./home.scss";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDragModalOpen, setIsDragModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openDragModal = () => {
    setIsDragModalOpen(true);
  };

  const closeDragModal = () => {
    setIsDragModalOpen(false);
  };

  return (
    <div className="home-page">
      <Container>
        <div className="home-page__btns">
          <Button type="button" onClick={openModal}>
            Open modal
          </Button>
          <Button type="button" onClick={openDragModal}>
            Open drag modal
          </Button>
        </div>
        <Modal onClose={closeModal} visible={isModalOpen}>
          Default modal
        </Modal>
        <DraggableModal onClose={closeDragModal} visible={isDragModalOpen}>
          Draggable modal
          <Button type="button" onClick={closeDragModal}>Close drag modal</Button>
        </DraggableModal>
      </Container>
    </div>
  );
}

export default Home;
