
import css from "./ImageCard.module.css";

function ImageCard({
  image: {
    alt_description,
    urls: { small },
  },
  onClick,
}) {
  return (
    <div className={css.card}>
      <img
        width={300}
        height={250}
        src={small}
        alt={alt_description}
        onClick={onClick} 
        className={css.image}
      />
    </div>
  );
}

export default ImageCard;