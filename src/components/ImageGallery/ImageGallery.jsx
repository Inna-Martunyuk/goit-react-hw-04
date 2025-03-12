import React from "react";
import "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className="image-gallery">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.urls.small}
          alt={image.alt_description}
          className="gallery-item"
          onClick={() => onImageClick(image)} 
        />
      ))}
    </div>
  );
};

export default ImageGallery;
