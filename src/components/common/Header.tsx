import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { useAuth } from './AuthContext';

const Header: React.FC = () => {
  const { authToken } = useAuth();

  return (
    <HeaderContainer>
      <NavItem>
        <Link to="/">선물하기</Link>
      </NavItem>
      {authToken ? (
        <NavItem>
          <Link to="/my-account">내 계정</Link>
        </NavItem>
      ) : (
        <NavItem>
          <Link to="/login">로그인</Link>
        </NavItem>
      )}
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

const NavItem = styled.li`
  margin: 0 20px;
`;
