import { ItemList } from "../../features/ItemList/ItemList";
import { movies } from "../../Data/Movies";

export const Announcements = () => {
  return (
    <>
      <h1>Serials</h1>
      <ItemList movies={movies} />
    </>
  );
};
