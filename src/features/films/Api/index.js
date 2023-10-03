import axios from "axios";

export const apiGetFilms = () =>
  axios.get("https://moviesdatabase.p.rapidapi.com/titles/", {
    headers: {
      "X-RapidAPI-Key": "b859f9bc43mshea7c8d0fe195763p1e9a82jsnbc4a07af26c5",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  });
