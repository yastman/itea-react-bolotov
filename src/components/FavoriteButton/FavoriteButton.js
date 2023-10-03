import "./FavoriteButton.scss";
export const FavoriteButton = ({ onClick }) => {
  return (
    <div className="favorite-button" onClick={onClick}>
      <span className="material-symbols-outlined">favorite</span>
    </div>
  );
};
