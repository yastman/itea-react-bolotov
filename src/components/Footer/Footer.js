import * as React from "react";
import "./Footer.scss";
import { CategoryList } from "../../features/CategoryList/CategoryList";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container-category">
          <CategoryList />
        </div>
      </div>
    </div>
  );
}
