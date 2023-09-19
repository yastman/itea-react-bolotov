import { ItemList } from "../../components/ItemList/ItemList";
import { movies } from "../../Data/Movies";

export const Anime = () => {
  return (
    <>
      <h1>Anime</h1>
      <ItemList movies={movies} />;
    </>
  );
};
