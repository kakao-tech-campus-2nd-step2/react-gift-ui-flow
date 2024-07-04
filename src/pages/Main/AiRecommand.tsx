import styled from "@emotion/styled";

import { breakpoints } from "@/styles/variants";

const AiRecommand = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <StyledDiv>
          <StyledInnerDiv>
            <StyledP>AI가 추천하는 선물</StyledP>
            <STyledBoldP>선물을 추천받고 싶은 친구를 선택해주세요.</STyledBoldP>
          </StyledInnerDiv>
        </StyledDiv>
      </InnerWrapper>
    </Wrapper>
  );
};

export default AiRecommand;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;

  @media screen and (max-width: ${breakpoints.sm}) {
    padding: 16px;
  }
`;

const InnerWrapper = styled.div`
  width: 1024px;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  @media screen and (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;

const StyledDiv = styled.div`
  width: 1024px;
  display: flex;
  background-color: rgb(254, 235, 0);
  border-radius: 8px;

  @media screen and (max-width: ${breakpoints.md}) {
    width: 100%;
  }
`;

const StyledInnerDiv = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  @media screen and (max-width: ${breakpoints.sm}) {
    align-items: start;
  }
`;

const StyledP = styled.p`
  font-size: 17px;
  line-height: 19px;
  padding-bottom: 5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.4);

  @media screen and (max-width: ${breakpoints.sm}) {
    font-size: 13px;
    line-height: 15px;
    padding-bottom: 3px;
  }
`;

const STyledBoldP = styled.p`
  font-size: 18px;
  line-height: 20px;
  font-weight: 700;
  color: rgb(0, 0, 0);

  @media screen and (max-width: ${breakpoints.sm}) {
    font-size: 14px;
    line-height: 16px;
  }
`;
