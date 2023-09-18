import { ItemCard } from "../ItemCard/ItemCard";
import "./FavoriteMoviesList.scss";

export const FavoriteMoviesList = ({ favoriteFilms }) => {
  if (favoriteFilms.length === 0) {
    return null;
  }
  return (
    <div className="favorite-movies-list">
      <div className="favorite-movies-list__title">
        <h2>Улюблені</h2>
      </div>
      <div className="favorite-movies-list__container">
        {favoriteFilms.map((movie) => (
          <div className="favorite-movies-list__card" key={movie.id}>
            <ItemCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};
