import "./UserBlock.scss";
export const UserBlock = ({
  user: { name, surname, age, subscribe, image },
}) => (
  <div className="user-block">
    <div className="user-block__container">
      <div className="user-block__image">
        <img src={image} alt="profile_img" />
      </div>
      <div className="user-block__name">
        <p>Name: {name}</p>
      </div>
      <div className="user-block__surname">
        <p>Surname: {surname}</p>
      </div>
      <div className="user-block__age">
        <p>Age: {age}</p>
      </div>
      <div className="user-block__subscribe">
        <p>Subscribe: {subscribe}</p>
      </div>
    </div>
  </div>
);
