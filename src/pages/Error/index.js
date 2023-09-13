import { Link } from "react-router-dom";
import "./Error.scss";

export const Error = () => {
  return (
    <div className="error">
      <div className="error__container">
        <h1 className="error__title">Error</h1>
        <Link className="error__link" to="/profile">
          {" "}
          Go to Profile
        </Link>
        <Link className="error__link" to="/home">
          {" "}
          Go to Home
        </Link>
      </div>
    </div>
  );
};
