export const ROUTES = {
  home: "/home",
  profile: "/profile",
  error: "/error",
};
export const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    image: "https://static.hdrezka.ac/i/2021/11/2/kcad758381af1ow79z45o.jpeg",
    description:
      "A thief who enters people's dreams to steal secrets takes on the inverse task of planting an idea into the mind of a CEO.",
    category: "Action",
  },
  {
    id: 2,
    title: "The Matrix",
    year: 1999,
    image: "https://static.hdrezka.ac/i/2014/1/22/h4442e483f19aey57g75d.jpg",
    description:
      "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
    category: "Action",
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    image: "https://example.com/dark-knight.jpg",
    description: "Batman takes on a psychopath known as the Joker.",
    category: "Action",
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    year: 2019,
    image: "https://example.com/endgame.jpg",
    description:
      "The Avengers assemble once more to undo Thanos' destruction and restore their fallen friends.",
    category: "Action",
  },
  {
    id: 5,
    title: "Forrest Gump",
    year: 1994,
    image: "https://example.com/forrest-gump.jpg",
    description:
      "Forrest Gump, a man with low IQ, recounts the early years of his life when he found himself in the middle of key historical events.",
    category: "Action",
  },
  {
    id: 6,
    title: "Shawshank Redemption",
    year: 1994,
    image: "https://example.com/shawshank.jpg",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    category: "Hot",
  },
  {
    id: 7,
    title: "Schindler's List",
    year: 1993,
    image: "https://example.com/schindlers-list.jpg",
    description:
      "In Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    category: "Hot",
  },
  {
    id: 8,
    title: "Interstellar",
    year: 2014,
    image: "https://example.com/interstellar.jpg",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    category: "Hot",
  },
  {
    id: 9,
    title: "Spirited Away",
    year: 2001,
    image: "https://example.com/spirited-away.jpg",
    description:
      "In the middle of her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.",
    category: "Hot",
  },
  {
    id: 10,
    title: "Pulp Fiction",
    year: 1994,
    image: "https://example.com/pulp-fiction.jpg",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    category: "Hot",
  },
];
export const HotFilms = movies.filter(({ category }) => category === "Hot");
export const ActionFilms = movies.filter(
  ({ category }) => category === "Action",
);
