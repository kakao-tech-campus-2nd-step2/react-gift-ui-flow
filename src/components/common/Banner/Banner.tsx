import styled from '@emotion/styled';
import React from 'react';

export type BannerProps = {
  label: string;
  title: string;
  description: string;
  backgroundColor: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Banner = ({ label, title, description, backgroundColor, ...props }: BannerProps) => {
  return (
    <BannerContainer backgroundColor={backgroundColor} {...props}>
      <Label>{label}</Label>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </BannerContainer>
  );
};

const BannerContainer = styled.div<{ backgroundColor: string }>`
  margin-top: 59px;
  display: flex;
  flex-direction: column;
  height: 117px;
  align-items: left;
  box-sizing: border-box;
  padding: 27px 20px 23px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const Label = styled.div`
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.7);
`;

const Title = styled.div`
  font-weight: 700;
  color: rgba(255, 255, 255);
  font-size: 18px;
  line-height: 26px;
  overflow: hidden;
`;

const Description = styled.div`
  padding-top: 5px;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.55);
  font-weight: 400;
`;
