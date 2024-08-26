import { useState } from "react";
import "./assets/styles/App.scss";
import { Modal } from "./components/Modal/Modal";
import { ModalWrapper } from "./components/ModalWrapper/ModalWrapper";

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <button onClick={toggleModal}>Sign up</button>
      {showModal && (
        <ModalWrapper onClose={toggleModal}>
          <Modal onClose={toggleModal}>
            <h1>MODAL</h1>
          </Modal>
        </ModalWrapper>
      )}
    </>
  );
}

export default App;
