import css from "./ImageCard.module.css";

const ImageCard = ({ image, openModal }) => {
  return (
    <>
      <img
        onClick={openModal}
        className={css.image}
        src={image.urls.small}
        alt={image.description}
      />
    </>
  );
};

export default ImageCard;
