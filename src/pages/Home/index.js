import { ItemList } from "../../features/ItemList/ItemList";
import { movies } from "../../Data/Movies";

export const Home = () => {
  return (
    <>
      <ItemList movies={movies} />
    </>
  );
};
