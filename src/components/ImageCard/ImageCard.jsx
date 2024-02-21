import { useState } from "react";
import ImageModal from "../ImageModal/ImageModal";
import css from "./ImageCard.module.css";

const ImageCard = ({ image }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <img
        onClick={openModal}
        className={css.image}
        src={image.urls.small}
        alt={image.description}
      />
      <ImageModal src={image.urls.regular} alt={image.description} setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
    </>
  );
};

export default ImageCard;
