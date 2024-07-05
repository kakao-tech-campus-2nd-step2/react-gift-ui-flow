import styled from '@emotion/styled';
import React from 'react';

import { Image } from '@/components/common/Image';

interface HeaderProps {
  isLoggedIn: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
  return (
    <HeaderContainer>
      <Image
        src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png"
        alt="선물하기 로고 이미지"
        width={61}
        height={54}
      />
      <MenuItem>{isLoggedIn ? '내 계정' : '로그인'}</MenuItem>
    </HeaderContainer>
  );
};

// 헤더 컨테이너 스타일 설정
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 10px 20px;
  border-bottom: 1px solid #e0e0e0;
`;

const MenuItem = styled.div`
  font-size: 14px;
  color: #333;
  cursor: pointer;
`;

export default Header;
