import styled from '@emotion/styled';

import KaKaoLoginBox from '@/pages/login/components/KaKaoLoginBox';
import { Layout } from '@/styles/Layout';

const LoginLayout = styled(Layout)`
  height: 100vh;
`;

const LoginPage = () => {
  return (
    <LoginLayout>
      <KaKaoLoginBox />
    </LoginLayout>
  );
};

export default LoginPage;
