import { ItemList } from "../../components/ItemList/ItemList";
import { movies } from "../../Data/Movies";

export const Hot = () => {
  return (
    <>
      <h1>Hot</h1>
      <ItemList movies={movies} />;
    </>
  );
};
