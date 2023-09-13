import { ItemList } from "../../features/ItemList/ItemList";
import { Link } from "react-router-dom";
import { movies } from "../../Data/Movies";

export const Anime = () => {
  return (
    <>
      <ItemList movies={movies} />;
    </>
  );
};
