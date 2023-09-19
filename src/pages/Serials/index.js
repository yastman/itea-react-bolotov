import { ItemList } from "../../components/ItemList/ItemList";
import { movies } from "../../Data/Movies";

export const Serials = () => {
  return (
    <>
      <h1>Serials</h1>
      <ItemList movies={movies} />
    </>
  );
};
