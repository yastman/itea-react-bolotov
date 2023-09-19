import { ItemList } from "../../components/ItemList/ItemList";
import { movies } from "../../Data/Movies";

export const Announcements = () => {
  return (
    <>
      <h1>Announcements</h1>
      <ItemList movies={movies} />
    </>
  );
};
