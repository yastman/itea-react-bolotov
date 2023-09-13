import { ItemList } from "../../features/ItemList/ItemList";
import { movies } from "../../Data/Movies";

export const Serials = () => {
  return (
    <>
      <ItemList movies={movies} />
    </>
  );
};
