import React from 'react';
import styled from '@emotion/styled';
import { CenteredContainer } from '@components/common';

export default function FriendGiftRecommendation() {
  return (
    <FriendGiftRecommendationContainer>
      <CenteredContainer maxWidth="md">
        <InnerContainer>
          <SubTitle>AI가 추천하는 선물</SubTitle>
          <Title>선물을 추천받고 싶은 친구를 선택해주세요.</Title>
        </InnerContainer>
      </CenteredContainer>
    </FriendGiftRecommendationContainer>
  );
}

const FriendGiftRecommendationContainer = styled.section`
  text-align: center;
`;

const InnerContainer = styled.div`
  padding: 16px;
  background-color: #feeb00;
  border-radius: 8px;
`;

const SubTitle = styled.p`
  font-size: 17px;
  color: #00000066;
  padding-bottom: 5px;
  margin: 0;
`;

const Title = styled.h6`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;
