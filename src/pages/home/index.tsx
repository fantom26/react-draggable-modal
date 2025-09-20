import { useState } from "react";

import { CustomErrorBoundary } from "@/shared/ui";
import {
  Button,
  Container,
  DraggableModal,
  ModalActions,
  ModalContent,
  ModalHeader,
  ModalRoot
} from "@/shared/ui";
import { Divider } from "@/shared/ui/divider";
import Form from "@/shared/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/tooltip";

import "./home.scss";

const FormExample = () => {
  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
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
  );
};

const FormErrorExample = () => {
  throw new Error("💥 Intentional render error");

  return <div>This will never render</div>;
};

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDragModalOpen, setIsDragModalOpen] = useState(false);
  const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);
  const [isPopover, setIsPopover] = useState(false);

  const openErrorModal = () => {
    setIsModalErrorOpen(true);
  };

  const closeErrorModal = () => {
    setIsModalErrorOpen(false);
  };

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

  const openPopover = () => {
    setIsPopover(true);
  };

  return (
    <div className="home-page">
      <Container>
        <div className="home-page__btns">
          <Button onClick={openModal}>Open modal</Button>
          <Button onClick={openDragModal}>Open drag modal</Button>
          <Button onClick={openErrorModal}>Open error modal</Button>

          <Popover
            open={isPopover}
            onOpenChange={setIsPopover}
            placement="bottom"
          >
            <Tooltip>
              <PopoverTrigger asChild>
                <TooltipTrigger asChild>
                  <Button onClick={openPopover}>Popover example</Button>
                </TooltipTrigger>
              </PopoverTrigger>
              <TooltipContent>Tooltip example</TooltipContent>
              <PopoverContent>Popover content</PopoverContent>
            </Tooltip>
          </Popover>
        </div>
        <ModalRoot onClose={closeModal} open={isModalOpen}>
          <ModalHeader onClose={closeModal}>Default modal</ModalHeader>
          <Divider />
          <ModalContent>
            <FormExample />
          </ModalContent>
          <Divider />
          <ModalActions>
            <Button>Cancel</Button>
            <Button>Agree</Button>
          </ModalActions>
        </ModalRoot>
        <ModalRoot onClose={closeErrorModal} open={isModalErrorOpen}>
          <ModalHeader onClose={closeErrorModal}>Error modal</ModalHeader>
          <Divider />
          <ModalContent>
            <CustomErrorBoundary title="Error">
              <FormErrorExample />
            </CustomErrorBoundary>
          </ModalContent>
          <Divider />
          <ModalActions>
            <Button onClick={closeErrorModal}>Cancel</Button>
            <Button onClick={closeErrorModal}>Agree</Button>
          </ModalActions>
        </ModalRoot>
        {isDragModalOpen && (
          <DraggableModal
            title="New Detail"
            onClose={closeDragModal}
            open={isDragModalOpen}
          >
            <FormExample />
          </DraggableModal>
        )}
      </Container>
    </div>
  );
}

export default Home;
