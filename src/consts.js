export const ROUTES = {
  home: "/home",
  profile: "/profile",
  error: "/error",
  films: "/films",
  serials: "/serials",
  cartoons: "/cartoons",
  anime: "/anime",
  hot: "/hot",
  announcements: "/announcements",
  collections: "/collections",
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
    image: "https://static.hdrezka.ac/i/2013/11/7/qbcd3c26d5b8efr73m34a.jpg",
    description: "Batman takes on a psychopath known as the Joker.",
    category: "Action",
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    year: 2019,
    image: "https://static.hdrezka.ac/i/2020/12/26/d1a80f3dac984uh36l68f.jpg",
    description:
      "The Avengers assemble once more to undo Thanos' destruction and restore their fallen friends.",
    category: "Action",
  },
  {
    id: 5,
    title: "Forrest Gump",
    year: 1994,
    image: "https://static.hdrezka.ac/i/2013/11/24/f8cfabd5b4fb8lh96z58u.jpg",
    description:
      "Forrest Gump, a man with low IQ, recounts the early years of his life when he found himself in the middle of key historical events.",
    category: "Action",
  },
  {
    id: 6,
    title: "Shawshank Redemption",
    year: 1994,
    image: "https://static.hdrezka.ac/i/2021/3/6/o41759bd352dazn54q16d.jpeg",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    category: "Hot",
  },
  {
    id: 7,
    title: "Schindler's List",
    year: 1993,
    image: "https://static.hdrezka.ac/i/2020/11/8/f7a8fed2cada3bm26g73e.jpeg",
    description:
      "In Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    category: "Hot",
  },
  {
    id: 8,
    title: "Interstellar",
    year: 2014,
    image: "https://static.hdrezka.ac/i/2022/12/8/s631dd866e67bgl98n40v.jpeg",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    category: "Hot",
  },
  {
    id: 9,
    title: "Spirited Away",
    year: 2001,
    image: "https://static.hdrezka.ac/i/2022/6/16/ae73de0f058cdhw57t21e.jpg",
    description:
      "In the middle of her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.",
    category: "Hot",
  },
  {
    id: 10,
    title: "Pulp Fiction",
    year: 1994,
    image: "https://static.hdrezka.ac/i/2021/3/17/q6e275b47b126xt59x65c.jpeg",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    category: "Hot",
  },
];
export const hotFilms = movies.filter(({ category }) => category === "Hot");
export const actionFilms = movies.filter(
  ({ category }) => category === "Action",
);
export const userProfiles = [
  {
    id: "1",
    name: "Yaroslav",
    surname: "Bolotov",
    age: "33",
    subscribe: "2 years",
    image:
      "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1693408717~exp=1693409317~hmac=c7a8c8766639cf6c1cb3308e08adeb9215899986d1ac82827e834cfcf2a1dd66",
  },
];
