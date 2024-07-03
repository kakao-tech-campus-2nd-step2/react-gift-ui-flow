import styled from '@emotion/styled';
import React from 'react';

const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <Label>가벼운 선물</Label>
      <Title>예산은 가볍게, 감동은 무겁게❤️</Title>
      <Description>당신의 센스를 뽐내줄 부담 없는 선물</Description>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  margin-top: 59px;
  display: flex;
  flex-direction: column;
  height: 117px;
  align-items: left;
  box-sizing: border-box;
  padding: 27px 20px 23px;
  background-color: #4b4d50;
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
