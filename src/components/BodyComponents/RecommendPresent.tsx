import styled from '@emotion/styled';
import React from 'react';

const RecommendPresent: React.FC = () => {
  return (
    <RecommendContainer>
      <MiniLabel>AI가 추천하는 선물</MiniLabel>
      <MainLabel>선물을 추천받고 싶은 친구를 선택해주세요.</MainLabel>
    </RecommendContainer>
  );
};

const RecommendContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(254, 235, 0);
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  box-sizing: border-box;
`;

const MiniLabel = styled.div`
  font-size: 13px;
  line-height: 15px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.4);
  padding-bottom: 3px;
  box-sizing: border-box;
`;

const MainLabel = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  color: rgb(0, 0, 0);
`;

export default RecommendPresent;
