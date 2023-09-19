import { ItemList } from "../../components/ItemList/ItemList";
import { movies } from "../../Data/Movies";

export const Films = () => {
  return (
    <>
      <h1>Films</h1>
      <ItemList movies={movies} />;
    </>
  );
};
