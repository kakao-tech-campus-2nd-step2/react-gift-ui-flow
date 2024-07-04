import styled from '@emotion/styled';

import { breakpoints } from '@/styles/variants/index';

const BtnWrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  max-width: 1024px;
`;

const SubTitle = styled.p`
  font-size: 13px;
  line-height: 15px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.4);
  padding-bottom: 3px;

  @media screen and (min-width: ${breakpoints.sm}) {
    font-size: 17px;
    line-height: 19px;
    padding-bottom: 5px;
  }
`;

const RecommendBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  padding: 16px;
  width: calc(100% - 32px);
  height: 34px;
  background-color: #fee500;

  @media screen and (min-width: ${breakpoints.sm}) {
    height: 50px;
    justify-content: center;
  }
`;

const ExWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: ${breakpoints.sm}) {
    align-items: center;
  }
`;

const Title = styled.h6`
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  color: rgb(0, 0, 0);

  @media screen and (min-width: ${breakpoints.sm}) {
    font-size: 18px;
    line-height: 20px;
  }
`;

const AIBtnBox = () => {
  return (
    <BtnWrapper>
      <RecommendBox>
        <ExWrapper>
          <SubTitle>AI가 추천하는 선물</SubTitle>
          <Title>선물을 추천받고 싶은 친구를 선택해주세요.</Title>
        </ExWrapper>
      </RecommendBox>
    </BtnWrapper>
  );
};

export default AIBtnBox;
