import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/components/AuthContext'; 

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  return (
    <Wrapper>
      <HeaderContainer>
        <HeaderNavigator className="inner">
          <GiftText onClick={() => navigate('/')}>
            <HeaderLogo src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png" alt="카카오 선물하기 로고" />
          </GiftText>
          {isAuth ? (
            <MyAccount onClick={() => navigate('/my-account')}>내 계정</MyAccount>
          ) : (
            <Login onClick={() => navigate('/login')}>로그인</Login>
          )}
        </HeaderNavigator>
      </HeaderContainer>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  position: fixed;
  box-sizing: border-box;
  z-index: 9999;
  width: 100%;
  max-width: 100vw;
  height: 54px;
  background-color: rgb(255, 255, 255);
  padding: 0px 16px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderNavigator = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const GiftText = styled.div``;

const HeaderLogo = styled.img`
  height: 54px;
`;

const Login = styled.div`
  width: 42px;
  cursor: pointer;
  line-height: 54px;
`;

const MyAccount = styled.div`
  cursor: pointer;
  line-height: 54px;
`;