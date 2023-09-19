import React, { useState } from "react";
import { ItemCard } from "../ItemCard/ItemCard";
import "./ItemList.scss";
import { ViewedItemList } from "../ViewedMoviesList/ViewedMoviesList";
import { FavoriteMoviesList } from "../FavoriteMoviesList/FavoriteMoviesList";

export const ItemList = ({ movies }) => {
  // Viewed films
  const [viewedItems, setViewedItems] = useState([]);
  const viewedItem = (id) => {
    setViewedItems((previewedItems) => [...previewedItems, id]);
  };

  const viewedItemsList = movies.filter((movie) =>
    viewedItems.includes(movie.id),
  );
  // Favorite films
  const [favoriteFilms, setFavoriteFilms] = useState([]);
  const markAsFavorite = (id) => {
    setFavoriteFilms((prevFavoriteFilms) => [...prevFavoriteFilms, id]);
  };

  const favoriteItemList = movies.filter((movie) =>
    favoriteFilms.includes(movie.id),
  );

  // Search films
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="item-list">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search movies"
      />
      <div className="item-list__title"></div>
      <div className="item-list__container">
        {filteredMovies.map((movie) => (
          <div className="item-list__card" key={movie.id}>
            <ItemCard
              movie={movie}
              viewedItem={() => viewedItem(movie.id)}
              markAsFavorite={() => markAsFavorite(movie.id)}
            />
          </div>
        ))}
      </div>

      <ViewedItemList viewedItems={viewedItemsList} />
      <FavoriteMoviesList favoriteFilms={favoriteItemList} />
    </div>
  );
};
