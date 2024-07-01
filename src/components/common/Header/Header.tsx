import styled from '@emotion/styled';
import React from 'react';

interface HeaderProps {
  isLoggedIn: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
  return (
    <HeaderContainer>
      <Placeholder />
      <MiddleSection>
        <Title>선물하기</Title>
        <MenuItem>{isLoggedIn ? '내 계정' : '로그인'}</MenuItem>
      </MiddleSection>
      <Placeholder />
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

const Placeholder = styled.div`
  flex: 1;
`;

const MiddleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const MenuItem = styled.div`
  font-size: 14px;
  color: #333;
  cursor: pointer;
`;

export default Header;
