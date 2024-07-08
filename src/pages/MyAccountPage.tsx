/* @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Layout/Container';
import { useAuth } from '@/hooks/useAuth';

export default function MyAccountPage() {
  const { authToken, setAuthToken } = useAuth();
  const navigate = useNavigate();
  // if (!authToken) {
  //   return <Navigate to="/login" replace={true} />;
  // }
  const HandleLogout = () => {
    sessionStorage.clear();
    setAuthToken(null);
    navigate('/', { replace: true });
  };
  return (
    <MyAccountWrapper>
      <Container flexDirection="column" justifyContent="center" alignItems="center" maxWidth="1024px">
        <Title>{authToken && authToken.id}님 안녕하세요!</Title>
        <Button
          themetype="darkGray"
          onClick={HandleLogout}
          css={css`
            max-width: 180px;
            margin-top: 30px;
          `}
        >
          로그아웃
        </Button>
      </Container>
    </MyAccountWrapper>
  );
}

const MyAccountWrapper = styled.div`
  width: 100%;
  padding: 80px 0px;
`;
const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
  padding-bottom: 50px;
`;
