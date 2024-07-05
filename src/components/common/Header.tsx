import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { useAuth } from './AuthContext';

const Header: React.FC = () => {
  const { authToken } = useAuth();

  return (
    <HeaderContainer>
      <Nav>
        <NavItemleft>
          <Link to="/">선물하기</Link>
        </NavItemleft>

        <NavList>
          {authToken ? (
            <NavItem>
              <Link to="/my-account">내 계정</Link>
            </NavItem>
          ) : (
            <NavItemRight>
              <Link to="/login">로그인</Link>
            </NavItemRight>
          )}
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ddd;
`;

const Nav = styled.nav`
  display: flex;
  width: 100%;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
  justify-content: flex-end;
`;

const NavItemleft = styled.div`
  margin-right: auto;
`;

const NavItem = styled.li`
  margin-left: 20px;
`;

const NavItemRight = styled(NavItem)`
  margin-left: auto;
`;
