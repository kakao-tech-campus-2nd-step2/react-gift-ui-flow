import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export type CategoryItemProps = {
  id: number;
  themeKey: string;
  name: string;
  image: string;
};

const CategoryItem: React.FC<{ item: CategoryItemProps }> = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/theme/${item.themeKey}`);
  };

  return (
    <ItemContainer onClick={handleClick}>
      <Image src={item.image} alt={item.name} />
      <ItemName>{item.name}</ItemName>
    </ItemContainer>
  );
};

export default CategoryItem;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const ItemName = styled.span`
  font-size: 14px;
  color: #333;
`;
