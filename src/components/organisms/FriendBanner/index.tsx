import styled from '@emotion/styled';
import type { MouseEvent } from 'react';

import { Container } from '@/components/molecules/Container';
import { ImageParagraphBanner } from '@/components/molecules/ImageParagraphBanner';

const friendImgSrc = 'https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png';
const alt = '카카오 선물하기 로고';
const pContent = '선물 받을 친구를 선택해주세요.';
const onClick = (e: MouseEvent) => {
  e.preventDefault();
  alert('선물 받을 친구 선택하기');
};

export const FriendBanner = () => {
  return (
    <FriendBannerWrapper>
      <Container>
        <ImageParagraphBanner src={friendImgSrc} alt={alt} onClick={onClick} pContent={pContent} />
      </Container>
    </FriendBannerWrapper>
  );
};

const FriendBannerWrapper = styled.section`
  box-sizing: border-box;
  width: 100%;
  background: #fafafa;
  height: 150px;
  padding: 40px 16px;
`;
