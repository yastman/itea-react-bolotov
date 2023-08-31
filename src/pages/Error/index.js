import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <h1>Error</h1>
      <Link to="/profile"> Go to Profile</Link>
      <Link to="/home"> Go to Home</Link>
    </>
  );
};
