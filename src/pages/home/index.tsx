import { useState } from "react";

import { Button, Container, DraggableModal, Modal } from "@/shared/ui";
import Form from "@/shared/ui/form";

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

  const onSubmit = (data: any) => {
    console.log(data);
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
        {isDragModalOpen && (
          <DraggableModal
            title="New Detail"
            onClose={closeDragModal}
            visible={isDragModalOpen}
          >
            <Form.Root classes="home-page__form" onSubmit={onSubmit}>
              <Form.Input name="name" label="Detail name" />
              <Form.Input name="material" label="Material" required />
              <div className="home-page__form-wrapper">
                <Form.Input name="width" label="Width" required />
                <Form.Input name="height" label="Height" required />
              </div>
              <Form.Checkbox name="terms" label="Texture" />
              <Form.TextArea name="comment" label="Comment" />
              <Button>Send</Button>
            </Form.Root>
          </DraggableModal>
        )}
      </Container>
    </div>
  );
}

export default Home;
