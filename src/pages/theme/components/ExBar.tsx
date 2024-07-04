import styled from '@emotion/styled';

import { breakpoints } from '@/styles/variants';

const Bar = styled.section`
  padding: 27px 20px 23px;
  width: calc(100% - 40px);
  background-color: rgb(75, 77, 80);

  @media screen and (min-width: ${breakpoints.sm}) {
    padding: 50px 20px;
  }
`;

const SubTitle = styled.p`
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.7);

  @media screen and (min-width: ${breakpoints.sm}) {
    font-size: 20px;
    line-height: 24px;
  }
`;

const MainTitle = styled.h1`
  font-weight: 700;
  color: rgb(255, 255, 255);
  font-size: 18px;
  line-height: 26px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;

  @media screen and (min-width: ${breakpoints.sm}) {
    font-size: 30px;
    line-height: 40px;
    padding-top: 12px;
    word-break: break-word;
  }
`;

const ExTitle = styled.p`
  padding-top: 5px;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.55);
  word-break: break-all;

  @media screen and (min-width: ${breakpoints.sm}) {
    padding-top: 12px;
    font-size: 24px;
    line-height: 32px;
  }
`;

const ExBar = () => {
  return (
    <Bar>
      <SubTitle>가벼운 선물</SubTitle>
      <MainTitle>예산은 가볍게, 감동은 무겁게❤️</MainTitle>
      <ExTitle>당신에게 센스를 뽐내줄 부담 없는 선물</ExTitle>
    </Bar>
  );
};

export default ExBar;
