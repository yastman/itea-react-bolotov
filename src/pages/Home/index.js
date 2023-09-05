import { Link } from "react-router-dom";
import { ItemList } from "../../features/ItemList/ItemList";
import { actionFilms, hotFilms } from "../../consts";

export const Home = () => {
  return (
    <>
      <h2>Hot Films</h2>
      <ItemList movies={hotFilms} />
      <h2>Action Films</h2>
      <ItemList movies={actionFilms} />
    </>
  );
};
