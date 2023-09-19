import React from "react";
import "./UserBlock.scss";

export const UserBlock = ({ user }) => {
  const { name, surname, age, subscribe, image } = user;
  return (
    <div className="user-block">
      <div className="user-block__image">
        <img src={image} alt={`${name} ${surname}`} />
      </div>
      <div className="user-block__info">
        <h2>{`${name} ${surname}`}</h2>
        <p>Возраст: {age}</p>
        <p>Подписка: {subscribe}</p>
      </div>
    </div>
  );
};
