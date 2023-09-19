import { Categories } from "../../Data/Categories";
import { Link } from "react-router-dom";
import "./CategoryList.scss";

export const CategoryList = () => {
  return (
    <ul className="category-list">
      {Categories.map(({ id, path, categoryTitle }) => (
        <li className="category-list__item" key={id}>
          <Link className="category-list_link" to={path}>
            {categoryTitle}
          </Link>
        </li>
      ))}
    </ul>
  );
};
