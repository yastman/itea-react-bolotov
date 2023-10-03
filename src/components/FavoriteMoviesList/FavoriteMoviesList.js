import { ItemCard } from "../ItemCard/ItemCard";
import "./FavoriteMoviesList.scss";
export const FavoriteMoviesList = ({ favoriteFilms, films }) => {
  const favoriteMovies = films.filter((film) =>
    favoriteFilms.includes(film.id)
  );
  if (!favoriteMovies.length) return null;

  return (
    <div className="favorite-movies-list">
      <h2>Favorite</h2>
      <div className="favorite-movies-list__container">
        {favoriteMovies.map((film) => (
          <ItemCard key={film.id} film={film} />
        ))}
      </div>
    </div>
  );
};
