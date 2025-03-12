import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, imageSrc }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        content: {
          border: "none",
          background: "none",
          overflow: "hidden",
          padding: 0,
          inset: "auto",
        },
      }}
    >
      {imageSrc && imageSrc.urls ? (
        <img
          src={imageSrc.urls.regular}
          alt={imageSrc.alt_description || "Large preview"}
          style={{ maxWidth: "90vw", maxHeight: "90vh", borderRadius: "10px" }}
        />
      ) : (
        <p>Зображення не знайдено</p>
      )}
    </Modal>
  );
};

export default ImageModal;
