import axios from "axios";

const getFilms = axios.get("https://moviesdatabase.p.rapidapi.com/titles");

export const apiFilms = { getFilms };
