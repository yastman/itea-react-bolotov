import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { Error } from "../pages/Error";
import { ROUTES } from "../consts";
import { Anime } from "../pages/Anime";
import { Films } from "../pages/Films";
import { Serials } from "../pages/Serials";
import { Hot } from "../pages/Hot/Hot";
import { Cartoons } from "../pages/Cartoons";
import { Popular } from "../pages/Popular";

export const AppRoutes = () => {
  const {
    home,
    cartoons,
    profile,
    serials,
    error,
    anime,
    films,
    hot,
    popular,
  } = ROUTES;
  return (
    <Routes>
      <Route path={"/"} element={<Navigate to="/home" />} />
      <Route path={home} element={<Home />} />
      <Route path={error} element={<Error />} />
      <Route path={profile} element={<Profile />} />
      <Route path={anime} element={<Anime />} />
      <Route path={films} element={<Films />} />
      <Route path={serials} element={<Serials />} />
      <Route path={cartoons} element={<Cartoons />} />
      <Route path={hot} element={<Hot />} />
      <Route path={popular} element={<Popular />} />
      <Route path={"*"} element={<Navigate to={"/error"} />} />
    </Routes>
  );
};
