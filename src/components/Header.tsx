import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { useAuth } from '@/AuthContext';

export const Header = () => {
  const { isAuthenticated } = useAuth();

  return (
    <HeaderContainer>
      <Nav>
        <TitleLink to="/">선물하기</TitleLink>
        {isAuthenticated ? (
          <>
            <LabelLink to="/my-account">내 계정</LabelLink>
          </>
        ) : (
          <LabelLink to="/login">로그인</LabelLink>
        )}
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 16px;
  background-color: #fff;
  position: fixed;
  width: 100%;
  max-width: 1024px;
  height: 59px;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  justify-content: space-between;
  display: flex;
  width: 100%;
`;

const LabelLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 14px;
  line-height: 20px;

  &:focus {
    outline: none;
  }
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 20px;
  font-weight: bold;

  &:focus {
    outline: none;
  }
`;
