import { useState } from "react";

import {
  Button,
  CloseModalBtn,
  Container,
  DraggableModal,
  Modal
} from "@/shared/ui";
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
          <DraggableModal onClose={closeDragModal} visible={isDragModalOpen}>
            Draggable modal
            <CloseModalBtn onClose={closeDragModal} />
            <Form.Root classes="home-page__form" onSubmit={onSubmit}>
              <Form.Input name="firstName" label="First name" required />
              <Form.Input name="lastName" label="Last name" required />
              <Form.Checkbox name="terms" label="Do you agree?" />
              <Form.TextArea name="comment" label="Comment" />
              <Button type="submit">Send</Button>
            </Form.Root>
          </DraggableModal>
        )}
      </Container>
    </div>
  );
}

export default Home;
