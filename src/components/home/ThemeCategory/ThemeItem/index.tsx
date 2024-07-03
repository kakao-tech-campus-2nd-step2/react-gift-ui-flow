import React from 'react';
import styled from '@emotion/styled';
import Container from '@components/common/Layout/Container/Container';
import Image from '@components/common/Image/Image';
import { THEME_ITEM } from '../constants';

export interface ThemeItemProps {
  image: string;
  name: string;
}

export default function ThemeItem({ image, name, ...rest }: ThemeItemProps) {
  return (
    <ThemeItemContainer {...rest}>
      <Container flexDirection="column" alignItems="center">
        <Image
          src={image}
          width={THEME_ITEM.IMAGE_SIZE}
          height={THEME_ITEM.IMAGE_SIZE}
          radius={THEME_ITEM.IMAGE_RADIUS}
          alt={name}
        />
        <CategoryName>{name}</CategoryName>
      </Container>
    </ThemeItemContainer>
  );
}

const ThemeItemContainer = styled.div`
  cursor: pointer;
`;

const CategoryName = styled.p`
  padding-top: 7px;
`;
