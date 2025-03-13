
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className={css.gallery}>
      {images.map((image) => (
        <img
          key={image.id}
          src={image.urls.small}
          alt={image.alt_description}
          className={css.image}
          onClick={() => onImageClick(image)} 
        />
      ))}
    </div>
  );
};

export default ImageGallery;
