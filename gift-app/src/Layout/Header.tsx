import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/LoginContext';

const Header = () => {
  const { isLoggedIn } = useLogin();

  return (
    <HeaderContainer>
      <Logo>선물하기</Logo>
      {isLoggedIn ? (
        <Link to="/my-account">내 계정</Link>
      ) : (
        <Link to="/login">로그인</Link>
      )}
    </HeaderContainer>
  );
};
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
`;

const Logo = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export default Header;