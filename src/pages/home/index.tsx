import { useState } from "react";

import { Container, Modal } from "@/shared/ui";

function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <button type="button" onClick={openModal}>
        Open modal
      </button>
      <Modal onClose={closeModal} visible={isOpen}>
        Modal
      </Modal>
    </Container>
  );
}

export default Home;
