import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./consts";
import { Home } from "./pages/Home";
import { Root } from "./pages/Root";

const App = () => {
  const { home, profile } = ROUTES;
  return (
    <Routes>
      <Route path={"/"} element={<Root />} />
      <Route path={home} element={<Home />} />
    </Routes>
  );
};
export default App;
