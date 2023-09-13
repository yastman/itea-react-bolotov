import { useState } from "react"; // Импорт useState из библиотеки React
import { ModalWindow } from "../ModalWindow/ModalWindow"; // Импорт компонента ModalWindow
import { HoverRating } from "../Rating/HoverRating";

// Объявление функционального компонента ItemCard, который принимает объект movie с данными фильма через деструктуризацию
export const ItemCard = ({ movie: { title, year, description, image } }) => {
  // Используем useState для управления состоянием открытия и закрытия модального окна
  const [isOpen, setIsOpen] = useState(false);

  // Функция handleOpen вызывается при клике на карточку и открывает модальное окно
  const handleOpen = () => {
    setIsOpen(true);
  };

  // Функция handleClose вызывается при закрытии модального окна и устанавливает isOpen в false
  const handleClose = () => {
    setIsOpen(() => {
      return false;
    });
  };

  // Рендеринг компонента ItemCard
  return (
    <div className="item-card">
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

      {/* Рендеринг компонента ModalWindow с передачей пропсов */}
      <ModalWindow
        isOpen={isOpen} // Состояние открытия модального окна
        onClose={handleClose} // Функция для закрытия модального окна
        movie={{ title, year, description, image }} // Информация о фильме
      />
    </div>
  );
};
