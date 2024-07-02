import styled from '@emotion/styled';

import InnerStyle from '@/styles/innerStyle';

const StyledRecommend = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
`;

const StyledInner = styled(InnerStyle)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  border-radius: 8px;
  background-color: rgb(254, 235, 0);

  p {
    font-size: 17px;
    color: rgba(0, 0, 0, 0.4);
    line-height: 19px;
    padding-bottom: 5px;
    font-weight: 500;
  }

  h6 {
    font-size: 18px;
    line-height: 20px;
    font-weight: 700;
  }
`;

const Recommend = () => {
  return (
    <StyledRecommend>
      <StyledInner>
        <p>AI가 추천하는 선물</p>
        <h6>선물을 추천받고 싶은 친구를 선택해주세요.</h6>
      </StyledInner>
    </StyledRecommend>
  );
};

export default Recommend;
