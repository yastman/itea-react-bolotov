import { UserBlock } from "../../features/UsersBlock/UserBlock";
import { userProfiles } from "../../consts";

export const Profile = () => {
  const renderProfile = (userInfo) => (
    <>
      {userInfo.map((user) => (
        <UserBlock key={user.id} user={user} />
      ))}
    </>
  );
  return (
    <>
      <h1>Profile Settings</h1>
      {renderProfile(userProfiles)}
    </>
  );
};
