import { ItemCard } from "../ItemCard/ItemCard";
import "./ViewedMoviesList.scss";

export const ViewedItemList = ({ viewedItems }) => {
  if (viewedItems.length === 0) {
    return null;
  }
  return (
    <div className="viewed-movies1-list">
      <div className="viewed-movies-list__title">
        <h2>Переглянуті</h2>
      </div>
      <div className="viewed-movies-list__container">
        {viewedItems.map((movie) => (
          <div className="viewed-movies-list__container" key={movie.id}>
            <ItemCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};
