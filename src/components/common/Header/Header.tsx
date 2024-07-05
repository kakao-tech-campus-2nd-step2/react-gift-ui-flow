import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/AuthContext'; // Import useAuth
import { Image } from '@/components/common/Image';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth(); // Use useAuth to get isLoggedIn

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <HeaderContainer>
      <LogoContainer onClick={handleLogoClick}>
        <Image
          src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png"
          alt="선물하기 로고 이미지"
          width={61}
          height={54}
        />
      </LogoContainer>
      <MenuItem onClick={handleLoginClick}>
        {isLoggedIn ? '내 계정' : '로그인'}
      </MenuItem>
    </HeaderContainer>
  );
};

// 헤더 컨테이너 스타일 설정
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0px 20px;
`;

const LogoContainer = styled.div`
  cursor: pointer;
`;

const MenuItem = styled.div`
  font-size: 14px;
  color: #333;
  cursor: pointer;
`;

export default Header;
