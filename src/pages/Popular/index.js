import { ItemList } from "../../components/ItemList/ItemList";
import { movies } from "../../Data/Movies";

export const Popular = () => {
  return (
    <>
      <h1>Popular</h1>
      <ItemList movies={movies} />
    </>
  );
};
