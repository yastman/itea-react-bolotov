import { ItemCard } from "../ItemCard/ItemCard";
import "./ViewedItemList.scss";
export const ViewedItemList = ({ viewedItems, films, isOpen, handleClose }) => {
  const viewedMovies = films.filter((film) => viewedItems.includes(film.id));

  if (!viewedMovies || viewedMovies.length === 0) {
    console.log("No viewed movies");
    return null;
  }

  return (
    <div className="viewed-movies-list">
      <div className="viewed-movies-list__title">
        <h2>Переглянуті</h2>
      </div>
      <div className="viewed-movies-list__container">
        {viewedMovies.map((film) => (
          <div className="viewed-movies-list__card" key={film.id}>
            <ItemCard film={film} isOpen={isOpen} onClose={handleClose} />
          </div>
        ))}
      </div>
    </div>
  );
};
