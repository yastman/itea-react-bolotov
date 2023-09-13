import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./AppRoutes/AppRoutes";
import { Layout } from "./components/Layout/Layout";
import "./styles/reset.scss";
import "./styles/global.scss";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Layout>
          <AppRoutes />
        </Layout>
      </div>
    </Router>
  );
};
export default App;
