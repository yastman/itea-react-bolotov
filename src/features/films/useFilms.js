// useFilms.js
import { useEffect, useState } from "react";
import { apiGetFilms } from "./Api";

export const useFilms = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await apiGetFilms();
        setFilms(data.results);
      } catch (e) {
        console.error("Error fetching films:", e); // Лучше использовать console.error для логирования ошибок
      }
    };
    fetchData();
  }, []);

  return films;
};
