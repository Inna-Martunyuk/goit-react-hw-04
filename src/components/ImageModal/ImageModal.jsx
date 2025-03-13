import Modal from "react-modal";
Modal.setAppElement("#root");
import css from "./ImageModal.module.css"

const ImageModal = ({ isOpen, onRequestClose, imageSrc }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={css.modal}
      overlayClassName={css.overlay}
   
    >
      {imageSrc && imageSrc.urls ? (
        <img
          src={imageSrc.urls.regular}
          alt={imageSrc.alt_description || "Large preview"}
          className={css.image}
        />
      ) : (
        <p>Image not found</p>
      )}
    </Modal>
  );
};

export default ImageModal;
