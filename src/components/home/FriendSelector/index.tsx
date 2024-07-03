import React from 'react';
import Image from '@components/common/Image/Image';
import friend from '@assets/images/friend.png';
import styled from '@emotion/styled';
import Container from '@components/common/Layout/Container/Container';
import Inner from '@components/common/Layout/Inner';

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
  padding: 40px 0;
  background-color: #fafafa;
`;

const Description = styled.p`
  padding-left: 16px;
  font-size: 28px;
`;
