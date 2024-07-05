import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/LoginContext';

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useLogin();

  const handleButtonClick = () => {
    if (!isLoggedIn)
      navigate('/login');
  };

  return (
    <HeaderContainer>
      <Logo>선물하기</Logo>
      <LoginButton onClick={handleButtonClick}>
        {isLoggedIn ? '내 계정' : '로그인'}
      </LoginButton>
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

const LoginButton = styled.button`
  font-size: 14px;
  background: none;
  border: none;
  cursor: pointer;
`;

export default Header;