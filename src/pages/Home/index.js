import { ItemList } from "../../components/ItemList/ItemList";
import { movies } from "../../Data/Movies";

export const Home = () => {
  return (
    <>
      <h1>Online cinema</h1>
      <ItemList movies={movies} />
    </>
  );
};
