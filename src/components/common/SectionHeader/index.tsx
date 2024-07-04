import React from 'react';
import styled from '@emotion/styled';
import { Inner } from '@components/common';

export interface SectionHeaderProps {
  label: string;
  title: string;
  description: string;
  color: string;
}

export default function SectionHeader({ label, title, description, color, ...rest }: SectionHeaderProps) {
  return (
    <SectionHeaderContainer {...rest} color={color}>
      <Inner maxWidth={1024}>
        <Label>{label}</Label>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Inner>
    </SectionHeaderContainer>
  );
}

const SectionHeaderContainer = styled.section<{ color: string }>`
  margin-top: 60px;
  background-color: ${({ color }) => color};
  padding: 50px 0;
`;

const Label = styled.p`
  font-size: 20px;
  color: #bbbbbbf3;
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
  color: #ffffff8c;
  padding-top: 12px;
`;
