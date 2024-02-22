import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <>
      <ul className={css.gallery}>
        {images.map((image) => (
          <li key={image.id} className={css.card}>
            <ImageCard
              image={image}
              openModal={() =>
                openModal({ src: image.urls.regular, alt: image.description })
              }
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
