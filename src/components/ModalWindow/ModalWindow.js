import React from "react";
import "./ModalWindow.scss";
import { HoverRating } from "../Rating/HoverRating";

export const ModalWindow = ({ isOpen, film, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal" onClick={() => onClose()}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close-button" onClick={onClose}>
          Close
        </button>
        <div className="modal__image">
          <img src={film.primaryImage.url} alt={film.titleText.text} />
        </div>
        <HoverRating />
        <h2 className="modal__title">{film.titleText.text}</h2>
        <p className="modal__year">Year: {film.releaseYear.year}</p>
        <p className="modal__description">Type: {film.titleType.text}</p>
      </div>
    </div>
  );
};
