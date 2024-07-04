import React from 'react';
import friend from '@assets/images/friend.png';
import styled from '@emotion/styled';
import { Container, Inner, Image } from '@components/common';

export default function FriendSelector() {
  return (
    <FriendSelectorContainer>
      <Inner maxWidth={1024}>
        <Container alignItems="center">
          <Image src={friend} width={70} height={70} radius={24} alt="친구 선택 유도 " />
          <Description>선물 받을 친구를 선택해주세요.</Description>
        </Container>
      </Inner>
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
