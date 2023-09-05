import styled from "styled-components";

const Item = styled.div`
  flex: 1;
  gap: 10px;
`;
const CardImage = styled.img`
  height: 200px;
  width: auto;
`;

export const ItemCard = ({ movie: { title, year, description, image } }) => (
  <Item>
    <CardImage src={image} alt={title} />
    <h2>{title}</h2>
    <p>Year: {year}</p>
    <p>Description: {description}</p>
  </Item>
);
