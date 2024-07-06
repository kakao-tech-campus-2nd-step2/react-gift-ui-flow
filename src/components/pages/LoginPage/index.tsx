import styled from '@emotion/styled';
import type { FormEvent } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useContext } from 'react';
import { Form, Link, useLocation } from 'react-router-dom';

import { Button } from '@/components/atoms/Button';
import { ContainerDirectionType } from '@/components/atoms/FlatFlex/types';
import { Image } from '@/components/atoms/Image';
import { UnderlineTextField } from '@/components/atoms/Input/UnderlineTextField';
import { CenteringContainer } from '@/components/molecules/CenteringContainer';
import type { Auth } from '@/contexts/AuthContext';
import { SetAuthContext } from '@/contexts/AuthContext';
import { RouterPath } from '@/router';

const imgSrc =
  'https://kakao-tech-week2-kakao-gift-ui-flow.pages.dev/static/media/kakao_logo.60e99555125ae4c4b8f23f6c5faee9ec.svg';

function validateString(str: string): boolean {
  const numericAlphabet = /^[a-zA-Z0-9]+$/;
  return numericAlphabet.test(str);
}

const mockLogin = (setAuth: Dispatch<SetStateAction<Auth>>) => (e: FormEvent<HTMLFormElement>) => {
  const formData = new FormData(e.currentTarget);
  const id = formData.get('id') as string;
  const pwd = formData.get('pwd') as string;

  if (!validateString(id as string) || !validateString(pwd as string)) {
    alert('특수문자는 절대 안돼요');
    e.preventDefault();
    e.currentTarget.reset();
    return;
  }

  // 등록된 유일한 회원
  if (id === 'qwer' && pwd === '1234') {
    const auth = { name: id };
    setAuth(auth);
    return;
  }

  e.preventDefault();
  e.currentTarget.reset();
};

export const LoginPage = () => {
  const location = useLocation();
  const setAuthContext = useContext(SetAuthContext) as Dispatch<SetStateAction<Auth>>;

  return (
    <FullHeightContainer maxWidth="580px" flexDirection={ContainerDirectionType.column}>
      <Link to={RouterPath.root}>
        <Image src={imgSrc} width="88px" color="#333" />
      </Link>
      <FormWrapper>
        <Form
          method="post"
          onSubmit={mockLogin(setAuthContext)}
          action={`/login?previousPage=${location.state?.previousPage || RouterPath.root}`}
        >
          <UnderlineTextField name="id" placeholder="이름" autoComplete="off" />
          <UnderlineTextField
            name="pwd"
            type="password"
            placeholder="비밀번호"
            autoComplete="off"
          />
          <Margin />
          <Button type="submit">로그인</Button>
        </Form>
      </FormWrapper>
    </FullHeightContainer>
  );
};

const FormWrapper = styled.div`
  width: 100%;
  max-width: 580px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 60px 52px;
`;

const Margin = styled.div`
  margin-bottom: 60px;
`;

const FullHeightContainer = styled(CenteringContainer)`
  height: 100vh;
`;
