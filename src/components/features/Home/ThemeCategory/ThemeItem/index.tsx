import React from 'react';
import styled from '@emotion/styled';
import { Container, Image } from '@components/common';
import { useNavigate } from 'react-router-dom';
import { getDynamicPath } from '@utils/getDynamicPath';
import { ROUTE_PATH } from '@routes/path';

const IMAGE_SIZE = 90;
const IMAGE_RADIUS = 32;

export interface ThemeItemProps {
  image: string;
  name: string;
  themeKey: string;
}

export default function ThemeItem({ image, name, themeKey, ...rest }: ThemeItemProps) {
  const navigate = useNavigate();

  return (
    <ThemeItemContainer {...rest} onClick={() => navigate(getDynamicPath(ROUTE_PATH.THEME, { themeKey }))}>
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
