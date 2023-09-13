import { UserBlock } from "../../features/UsersBlock/UserBlock";
import { userProfiles } from "../../Data/UsersInfo";
import "./Profile.scss";
export const Profile = () => {
  const renderProfile = (userInfo) => (
    <>
      {userInfo.map((user) => (
        <UserBlock key={user.id} user={user} />
      ))}
    </>
  );
  return (
    <div className="profile">
      <div className="profile__title">
        <h1>Profile Settings</h1>
      </div>
      <div className="profile__container">{renderProfile(userProfiles)}</div>
    </div>
  );
};
