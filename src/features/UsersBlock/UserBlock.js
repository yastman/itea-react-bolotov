export const UserBlock = ({
  user: { name, surname, age, subscribe, image },
}) => (
  <>
    <img src={image} alt="profile_info" />
    <p>Name: {name}</p>
    <p>Surname: {surname}</p>
    <p>Age: {age}</p>
    <p>Subscribe: {subscribe}</p>
  </>
);
