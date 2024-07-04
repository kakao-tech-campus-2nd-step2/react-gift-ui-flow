import styled from '@emotion/styled';

import KaKaoLoginBox from '@/pages/login/components/KaKaoLoginBox';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 238px);
`;

const LoginPage = () => {
  return (
    <LoginContainer>
      <KaKaoLoginBox />
    </LoginContainer>
  );
};

export default LoginPage;
