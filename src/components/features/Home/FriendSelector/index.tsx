import React from 'react';
import friend from '@assets/images/friend.png';
import styled from '@emotion/styled';
import { Container, CenteredContainer, Image } from '@components/common';

const IMAGE_SIZE = 70;
const IMAGE_RADIUS = 24;
const IMAGE_ALT = '친구 선택 유도';

export default function FriendSelector() {
  return (
    <FriendSelectorContainer>
      <CenteredContainer maxWidth="md">
        <Container alignItems="center">
          <Image src={friend} width={IMAGE_SIZE} height={IMAGE_SIZE} radius={IMAGE_RADIUS} alt={IMAGE_ALT} />
          <Description>선물 받을 친구를 선택해주세요.</Description>
        </Container>
      </CenteredContainer>
    </FriendSelectorContainer>
  );
}

const FriendSelectorContainer = styled.section`
  margin-top: 60px;
  padding: 40px 0;
  background-color: #fafafa;
`;

const Description = styled.p`
  padding-left: 16px;
  font-size: 28px;
`;
