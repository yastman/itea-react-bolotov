import React, { useState } from "react";
import { ItemCard } from "../ItemCard/ItemCard";
import { ViewedItemList } from "../ViewedItemList/ViewedItemList";
import { FavoriteMoviesList } from "../FavoriteMoviesList/FavoriteMoviesList";
import { useSelector } from "react-redux";

export const ItemList = ({ films: externalFilms }) => {
  const reduxFilms = useSelector((state) => state.films.items);
  const films = externalFilms || reduxFilms;

  const [viewedItems, setViewedItems] = useState([]);
  const [favoriteFilms, setFavoriteFilms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  console.log("Current search term:", searchTerm); // Проверка инициализации searchTerm
  console.log("Films:", films); // Проверка приходящего массива фильмов

  // Проверка на наличие свойства title у всех фильмов
  films.forEach((film, index) => {
    if (!film.title) {
      console.log(`Film at index ${index} does not have a title`);
    }
  });

  const viewedItem = (id) => {
    setViewedItems([...viewedItems, id]);
  };

  const markAsFavorite = (id) => {
    setFavoriteFilms([...favoriteFilms, id]);
  };

  const filteredFilms = films.filter((film) => {
    if (!film || !film.titleText || !film.titleText.text) {
      console.log("Skipping undefined or incomplete film:", film);
      return false;
    }
    return film.titleText.text.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="item-list">
      <input
        type="text"
        placeholder="Поиск..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="item-list__container">
        {filteredFilms.map((film) => (
          <ItemCard
            key={film.id}
            film={film}
            markAsFavorite={markAsFavorite}
            markAsViewed={viewedItem}
          />
        ))}
      </div>
      <ViewedItemList viewedItems={viewedItems} films={films} />
      <FavoriteMoviesList favoriteFilms={favoriteFilms} films={films} />
    </div>
  );
};
