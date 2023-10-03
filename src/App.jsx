import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./AppRoutes/AppRoutes";
import { Layout } from "./components/Layout/Layout";
import "./styles/reset.scss";
import "./styles/global.scss";
import { Provider } from "react-redux";
import { store } from "./app/store";

const App = () => {
  return (
    <Provider store={store}>

    <Router>
    <div className="container">
        <Layout>
          <AppRoutes />
        </Layout>
      </div>
    </Router>
    </Provider>
    );
  };
export default App;
