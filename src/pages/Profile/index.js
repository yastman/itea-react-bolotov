import "./Profile.scss";
import { userProfiles } from "../../Data/UsersInfo";
import { UserBlock } from "../../components/UserBlock/UserBlock";

export const Profile = () => {
  const renderProfile = (profiles) => (
    <>
      {profiles.map((user) => (
        <UserBlock key={user.id} user={user} /> // Использование корректного имени компонента
      ))}
    </>
  );

  return (
    <div className="profile">
      <div className="profile__title">
        <h1>Profile</h1>
      </div>
      <div className="profile__container">{renderProfile(userProfiles)}</div>
    </div>
  );
};
