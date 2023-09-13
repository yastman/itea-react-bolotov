import { ItemList } from "../../features/ItemList/ItemList";
import { movies } from "../../Data/Movies";

export const Cartoons = () => {
  return (
    <>
      <ItemList movies={movies} />
    </>
  );
};
