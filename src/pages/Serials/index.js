import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFilms } from "./filmSlice";
import { ItemList } from "../../components/ItemList/ItemList"; // Импортируйте ваш компонент ItemList

export const Serials = ({ externalFilms }) => {
  const dispatch = useDispatch();
  const reduxFilms = useSelector((state) => state.films.items);
  const status = useSelector((state) => state.films.status);

  useEffect(() => {
    if (status === "idle" && !externalFilms) {
      dispatch(fetchFilms());
    }
  }, [status, dispatch, externalFilms]);

  // Определяем, какие фильмы использовать: из Redux или внешние
  const filmsToRender = externalFilms || reduxFilms;

  return (
    <>
      <h1>Serials</h1>
      {status === "loading" && <div>Loading...</div>}
      {status === "succeeded" && <ItemList films={filmsToRender} />}
      {status === "failed" && <div>Error loading films.</div>}
    </>
  );
};
