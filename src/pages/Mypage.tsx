/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import Footer from '@/components/common/Footer';
import Header, { HeaderSubtitle, HeaderTitle } from '@/components/common/Header';
import { useAuth } from '@/context/AuthContext';

const MypageContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 64px;
  margin-bottom: 100px;
`;

const Hello = styled.div`
  font-size: 35px;
  font-weight: bold;
  margin: 70px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonLogout = styled(Button)`
  margin: 0 100px;
`;

const ButtonTitle = styled.div`
  font-size: 15px;
`;

const Mypage = () => {
  const { authToken, logout } = useAuth();
  return (
    <MypageContainer>
      <HeaderWrapper>
        <Header>
          <Link to={'/'}>
            <HeaderTitle>선물하기</HeaderTitle>
          </Link>
          <Link to={authToken ? '/my-account' : '/login'}>
            <HeaderSubtitle>{authToken ? '내 계정' : '로그인'}</HeaderSubtitle>
          </Link>
        </Header>
      </HeaderWrapper>
      <Container>
        <Hello>{authToken}님 안녕하세요!</Hello>
        <ButtonContainer>
          <ButtonLogout theme="black" size="small" onClick={logout}>
            <ButtonTitle>로그아웃</ButtonTitle>
          </ButtonLogout>
        </ButtonContainer>
      </Container>
      <Footer title="카카오톡 선물하기" />
    </MypageContainer>
  );
};

export default Mypage;
