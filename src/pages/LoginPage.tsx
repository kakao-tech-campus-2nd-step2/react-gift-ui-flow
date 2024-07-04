/* @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Button } from '@/components/common/Button';
import { UnderlineTextField } from '@/components/common/Form/Input/UnderlineTextField';
import { Container } from '@/components/common/Layout/Container';

export default function LoginPage() {
  return (
    <LoginWrapper>
      <Title>Kakao</Title>
      <Container justifyContent="center" alignItems="center" maxWidth="1024px">
        <FormWrapper>
          <UnderlineTextField placeholder="이름" variant="responsive" />
          <UnderlineTextField placeholder="비밀번호" variant="responsive" />
          <Button
            themetype="kakao"
            size="responsive"
            css={css`
              width: 100%;
              margin-top: 40px;
            `}
          >
            로그인
          </Button>
        </FormWrapper>
      </Container>
    </LoginWrapper>
  );
}
const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.p`
  font-size: 32px;
  padding-bottom: 50px;
`;
const FormWrapper = styled.form`
  width: 56%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 50px;
`;
