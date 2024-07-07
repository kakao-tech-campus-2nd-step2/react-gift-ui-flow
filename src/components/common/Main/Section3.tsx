import styled from '@emotion/styled';
import React from 'react';

const StyledSection3Container = styled.section`
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(254, 235, 0);
    margin-top: 40px;
    margin-bottom: 40px;
    padding: 16px;
    border-radius: 8px;

    & > p {
        font-size: 13px;
        line-height: 15px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.4);
        padding-bottom: 3px;
    }
    
    & > h6 {
        font-size: 14px;
        line-height: 16px;
        font-weight: 700;
        color: rgb(0, 0, 0);
    }
}
`;

const Section3: React.FC = () => {
  return (
    <StyledSection3Container>
      <p>AI가 추천하는 선물</p>
      <h6>선물을 추천받고 싶은 친구를 선택해주세요.</h6>
    </StyledSection3Container>
  );
};

export default Section3;
