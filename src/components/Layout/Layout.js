import { Header } from "../Header/Header";
import "./Layout.scss";
import Footer from "../Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__header">
        <Header />
      </div>
      <div className="layout__container">
        <main>{children}</main>
      </div>
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  );
};
