import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./AppRoutes/AppRoutes";
import { Layout } from "./components/Layout/Layout";
const App = () => {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
};
export default App;
