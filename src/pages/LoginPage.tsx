import styled from '@emotion/styled';

import { Button } from '@/components/common/Button';
import { UnderlineTextField } from '@/components/common/Form/Input/UnderlineTextField';
import { Container } from '@/components/common/layouts/Container/index';

export const LoginPage: React.FC = () => {
  return (
    <LoginSection>
      <h1>kakao</h1>
      <FormContainer>
        <LoginField placeholder="이름"></LoginField>
        <LoginField placeholder="비밀번호" type="password"></LoginField>
        <LoginButton theme="kakao" size="small">
          로그인
        </LoginButton>
      </FormContainer>
    </LoginSection>
  );
};

const LoginSection = styled.section``;

const FormContainer = styled(Container)``;

const LoginField = styled(UnderlineTextField)``;

const LoginButton = styled(Button)``;
