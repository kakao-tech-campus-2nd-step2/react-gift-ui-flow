import styled from '@emotion/styled';

import { Button } from '@/components/common/Button';
import { Footer } from '@/components/common/Footer/Footer';
import { Header } from '@/components/common/Header/Header';
import { useAuthContext } from '@/hooks/useAuthContext';

const MyAccountPage = () => {
  const { username, logout } = useAuthContext();

  return (
    <>
      <Header />
      <Wrapper>
        <AccountContainer>
          {username}님 안녕하세요!
          <Space />
          <Button theme="darkGray" style={{ maxWidth: '200px' }} onClick={logout}>
            로그아웃
          </Button>
        </AccountContainer>
        <Footer />
      </Wrapper>
    </>
  );
};

export default MyAccountPage;

const Wrapper = styled.div({
  width: '100%',
  position: 'absolute',
  top: '0px',
  left: '0px',
  marginTop: '54px',
});

const AccountContainer = styled.div({
  width: '100%',
  padding: '80px 0px 120px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '700',
  fontSize: '36px',
});

const Space = styled.div`
  height: 64px;
`;
