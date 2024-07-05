import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/AuthContext';
import { Image } from '@/components/common/Image';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleMenuClick = () => {
    if (isLoggedIn) {
      navigate('/my-account');
    } else {
      navigate('/login');
    }
  };

  return (
    <HeaderContainer>
      <LogoContainer onClick={handleLogoClick}>
        <Image
          src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png"
          alt="선물하기 로고 이미지"
          width={40}
          height={25}
        />
      </LogoContainer>
      <MenuItem onClick={handleMenuClick}>{isLoggedIn ? '내 계정' : '로그인'}</MenuItem>
    </HeaderContainer>
  );
};

// 헤더 컨테이너 스타일 설정
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 5px 15vh;
`;

const LogoContainer = styled.div`
  cursor: pointer;
`;

const MenuItem = styled.div`
  font-size: 10px;
  color: #333;
  cursor: pointer;
`;

export default Header;
