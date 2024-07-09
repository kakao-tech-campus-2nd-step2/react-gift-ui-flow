import React from 'react';
import styled from '@emotion/styled';
import { CenteredContainer } from '@components/common';
import { useParams } from 'react-router-dom';
import { THEME_KEY } from './constants';

export default function SectionHeader() {
  const { themeKey } = useParams<{ themeKey: string }>();
  const theme = THEME_KEY.find((t) => t.themeKey === themeKey);

  return (
    <SectionHeaderContainer color={theme?.color}>
      <CenteredContainer maxWidth="md">
        <Label>{theme?.label}</Label>
        <Title>{theme?.title}</Title>
        <Description>{theme?.description}</Description>
      </CenteredContainer>
    </SectionHeaderContainer>
  );
}

const SectionHeaderContainer = styled.section<{ color?: string }>`
  margin-top: 60px;
  background-color: ${({ color }) => color};
  padding: 50px 0;
`;

const Label = styled.p`
  font-size: 20px;
  color: #333;
  font-weight: 700;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  padding-top: 12px;
`;

const Description = styled.p`
  font-size: 24px;
  color: #505050;
  padding-top: 12px;
`;
