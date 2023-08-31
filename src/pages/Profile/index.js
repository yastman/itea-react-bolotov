import { Link } from "react-router-dom";

export const Profile = () => (
  <>
    <ul>
      <li>
        <Link to="/home"> Go to Home</Link>
      </li>
    </ul>
    <h1>Profile</h1>
    <div>
      <img
        src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1693408717~exp=1693409317~hmac=c7a8c8766639cf6c1cb3308e08adeb9215899986d1ac82827e834cfcf2a1dd66"
        alt="avatar"
        style={{
          width: "200px",
          height: "200px",
        }}
      />
    </div>
    <p>Name: Yaroslav</p>
    <p>Surname: Bolotov</p>
    <p>Age: 33</p>
    <p>Subscribe: 2 years</p>
  </>
);
