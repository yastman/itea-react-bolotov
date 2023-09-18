import { useState } from "react"; //
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { HoverRating } from "../Rating/HoverRating";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";

export const ItemCard = ({
  viewedItem,
  markAsFavorite,
  movie: { id, title, year, description, image },
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    viewedItem(id);
  };

  const handleFavorite = () => {
    markAsFavorite(id);
  };
  const handleClose = () => {
    setIsOpen(() => {
      return false;
    });
  };

  return (
    <div className="item-card">
      <div className="item-card__favorite-button" onClick={handleFavorite}>
        <FavoriteButton />
      </div>
      <div className="item-card__image" onClick={handleOpen}>
        <img src={image} alt={title} />
      </div>
      <HoverRating />
      <div className="item-card__title">
        <p>{title}</p>
      </div>
      <div className="item-card__year">
        <p>Year: {year}</p>
      </div>
      <ModalWindow
        isOpen={isOpen}
        onClose={handleClose}
        movie={{ title, year, description, image }}
      />
    </div>
  );
};
