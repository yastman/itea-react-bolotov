import { useState } from "react";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { ModalWindow } from "../ModalWindow/ModalWindow";

export const ItemCard = ({ film, markAsFavorite, markAsViewed }) => {
  const {
    titleText: { text },
    releaseYear: { year },
    primaryImage,
  } = film;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    console.log("handleOpen was triggered");

    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="item-card">
      <div className="item-card__favorite-button">
        <FavoriteButton
          onClick={() => {
            markAsFavorite(film.id);
          }}
        />
      </div>
      <div
        className="item-card__image"
        onClick={() => {
          handleOpen();
          markAsViewed(film.id);
        }}
      >
        {primaryImage && <img src={primaryImage.url} alt={text} />}
      </div>
      <div className="item-card__content">
        <div className="item-card__title">
          <p>{text}</p>
        </div>
        <div className="item-card__year">
          <p>Year: {year}</p>
        </div>
        <div className="item-card_modal-window">
          <ModalWindow isOpen={isOpen} onClose={handleClose} film={film} />
        </div>
      </div>
    </div>
  );
};
