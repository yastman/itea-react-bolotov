import { ItemList } from "../../components/ItemList/ItemList";
import { useFilms } from "../../features/films/useFilms";

export const Home = () => {
  const films = useFilms();
  return (
    <>
      <h1>Online cinema</h1>
      <ItemList films={films} />
    </>
  );
};
