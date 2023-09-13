import { ItemList } from "../../features/ItemList/ItemList";
import { movies } from "../../Data/Movies";

export const Films = () => {
  return (
    <>
      <ItemList movies={movies} />;
    </>
  );
};
