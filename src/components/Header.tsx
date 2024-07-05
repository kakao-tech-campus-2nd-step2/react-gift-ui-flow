import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const loginBtnText: string = sessionStorage.getItem('authToken') ? '내 계정' : '로그인';

  const handleLoginBtn = () => {
    if (loginBtnText === '로그인') {
      navigate('/login');
    } else {
      navigate('/my-account');
    }
  };

  return (
    <HeaderContainer>
      <a href="/">
        <HomeLogo
          src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png"
          alt="Home Logo"
        ></HomeLogo>
      </a>
      <LoginBtn onClick={handleLoginBtn}>{loginBtnText}</LoginBtn>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  z-index: 10;
  height: 54px;
  a {
    outline: none;
  }
`;

const HomeLogo = styled.img`
  width: 60px;

  &:hover {
    cursor: pointer;
  }
`;

const LoginBtn = styled.span`
  font-size: 15px;
  color: black;
  &:hover {
    cursor: pointer;
  }
`;
