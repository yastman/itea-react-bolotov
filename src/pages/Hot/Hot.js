import { ItemList } from "../../features/ItemList/ItemList";
import { movies } from "../../Data/Movies";

export const Hot = () => {
  return (
    <>
      <ItemList movies={movies} />;
    </>
  );
};