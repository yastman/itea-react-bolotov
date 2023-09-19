import { useEffect, useState } from "react";
import { apiFilms } from "./Api";

export const Films = () => {
  const [films, setFilms] = useState([]);

  const getFilms = async () => {
    try {
      const { data } = await apiFilms.getFilms();
      setFilms(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getFilms();
  }, []);

  return <div>Users</div>;
};
