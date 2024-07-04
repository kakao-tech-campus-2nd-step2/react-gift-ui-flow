import styled from '@emotion/styled';
import React from 'react';

const BannerContainer = styled.section`
  padding: 27px 20px 23px;
  width: 100%;
  background-color: rgb(75, 77, 80);

  & > p {
    color: rgb(255, 255, 255);
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    color: rgba(255, 255, 255, 0.7);
  }
  & > h1 {
    font-weight: 700;
    color: rgb(255, 255, 255);
    font-size: 18px;
    line-height: 26px;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
  }
`;

const Description = styled.div`
  padding-top: 5px;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.55);
  word-break: break-all;
`;

const ThemeBanner: React.FC = () => {
  return (
    <BannerContainer>
      <p>가벼운 선물</p>
      <h1>예산은 가볍게, 감동은 무겁게❤️</h1>
      <Description>당신의 센스를 뽐내줄 부담 없는 선물</Description>
    </BannerContainer>
  );
};

export default ThemeBanner;
