import React from 'react';
import styled from '@emotion/styled';
import { Container, Image } from '@components/common';
import { useNavigate } from 'react-router-dom';

const IMAGE_SIZE = 90;
const IMAGE_RADIUS = 32;

export interface ThemeItemProps {
  image: string;
  name: string;
  themeKey: string;
}

export default function ThemeItem({ image, name, themeKey, ...rest }: ThemeItemProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/theme/${themeKey}`);
  };

  return (
    <ThemeItemContainer {...rest} onClick={handleClick}>
      <Container flexDirection="column" alignItems="center">
        <Image src={image} width={IMAGE_SIZE} height={IMAGE_SIZE} radius={IMAGE_RADIUS} alt={name} />
        <CategoryName>{name}</CategoryName>
      </Container>
    </ThemeItemContainer>
  );
}

const ThemeItemContainer = styled.div`
  padding: 25px 35px;
  cursor: pointer;
`;

const CategoryName = styled.p`
  padding-top: 7px;
`;
