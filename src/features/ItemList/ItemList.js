import React from "react";
import { ItemCard } from "../../components/ItemCard/ItemCard";
import "./ItemList.scss";
export const ItemList = ({ movies, categoryTitle }) => {
  return (
    <div className="item-list">
      <div className="item-list__title">
        <h2>{categoryTitle}</h2>
      </div>
      <div className="item-list__container">
        {movies.map((movie) => (
          <div className="item-list__card" key={movie.id}>
            <ItemCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};
