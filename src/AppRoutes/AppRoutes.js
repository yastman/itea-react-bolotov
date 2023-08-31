import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { Error } from "../pages/Error";
import { ROUTES } from "../consts";
export const AppRoutes = () => {
  const { home, profile, error } = ROUTES;
  return (
    <Routes>
      <Route path={"/"} element={<Navigate to="/home" />} />
      <Route path={"*"} element={<Navigate to={"/error"} />} />
      <Route path={home} element={<Home />} />
      <Route path={profile} element={<Profile />} />
      <Route path={error} element={<Error />} />
    </Routes>
  );
};
