import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  if (!images || images.length === 0) return <p>Нічого не знайдено</p>;

  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <img src={image.urls.small} alt={image.alt_description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
