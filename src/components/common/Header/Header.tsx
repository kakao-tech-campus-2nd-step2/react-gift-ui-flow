import styled from '@emotion/styled';
import React from 'react';

// 헤더의 컨테이너로, 레이아웃과 외관 스타일을 설정
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
`;

// 제목 스타일 설정
const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

// 메뉴 항목 컨테이너로, 간격을 설정
const Menu = styled.div`
  display: flex;
  gap: 20px;
`;

// 개별 메뉴 항목 스타일 설정, 호버 시 밑줄 제거
const MenuItem = styled.div`
  font-size: 14px;
  color: #333;
  cursor: pointer;
`;

interface HeaderProps {
  isLoggedIn: boolean; // 로그인 상태를 나타내는 boolean 값
}

// Header 컴포넌트, 로그인 상태에 따라 다른 텍스트를 표시
const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
  return (
    <HeaderContainer>
      <Title>선물하기</Title>
      <Menu>
        <MenuItem>{isLoggedIn ? '내 계정' : '로그인'}</MenuItem>
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
