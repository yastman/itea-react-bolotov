import React from "react"; // Импортируем библиотеку React
import "./ModalWindow.scss"; // Импортируем стили для компонента из файла ModalWindow.scss
import { HoverRating } from "../Rating/HoverRating"; // Импортируем компонент HoverRating из указанного пути

// Объявление функционального компонента ModalWindow с использованием деструктуризации пропсов
export const ModalWindow = ({ isOpen, movie, onClose }) => {
  // Проверяем, если isOpen равно false, то возвращаем null, что означает, что модальное окно не будет отображено
  if (!isOpen) {
    return null;
  }

  // Возвращаем разметку модального окна
  return (
    <div
      className="modal" // Устанавливаем класс "modal" для внешнего div
      onClick={(e) => {
        // e.stopPropagation(); // Предотвращаем всплытие события клика
        onClose(); // Вызываем функцию onClose, которая, вероятно, закрывает модальное окно
      }}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close-button" onClick={onClose}>
          Close
        </button>
        <div className="modal__image">
          <img src={movie.image} alt={movie.title} />
        </div>
        <HoverRating />
        <h2 className="modal__title">{movie.title}</h2>
        <p className="modal__year">Year: {movie.year}</p>
        <p className="modal__description">{movie.description}</p>
      </div>
    </div>
  );
};
