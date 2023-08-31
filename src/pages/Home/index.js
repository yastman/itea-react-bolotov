import { Link } from "react-router-dom";
import { HotFilms } from "../../consts";
import { ActionFilms } from "../../consts";

export const Home = () => {
  const renderMovies = (movieList) => {
    return (
      <ul>
        {movieList.map(({ id, title, year, description, image }) => (
          <li key={id}>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>Year: {year}</p>
            <p>Description: {description}</p>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <Link to="/profile">Go to Profile</Link>
      <h1>Home Page</h1>
      <div>
        <h2>Action Movies</h2>
        {renderMovies(ActionFilms)}
        <h2>Hot Movies</h2>
        {renderMovies(HotFilms)}
      </div>
    </>
  );
};
