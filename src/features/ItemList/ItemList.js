import { ItemCard } from "../../components/ItemCard/ItemCard";
import styled from "styled-components";

const MovieList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ItemList = ({ movies }) => {
  const renderMovies = (movies) => (
    <MovieList>
      {movies.map((movie) => (
        <ItemCard key={movie.id} movie={movie} />
      ))}
    </MovieList>
  );
  return <>{renderMovies(movies)}</>;
};
