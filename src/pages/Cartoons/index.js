import { ItemList } from "../../components/ItemList/ItemList";
import { movies } from "../../Data/Movies";

export const Cartoons = () => {
  return (
    <>
      <h1>Cartoons</h1>
      <ItemList movies={movies} />
    </>
  );
};
