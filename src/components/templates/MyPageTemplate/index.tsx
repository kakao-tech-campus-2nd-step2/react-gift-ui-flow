import styled from '@emotion/styled';
import type { Dispatch, SetStateAction } from 'react';
import { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/atoms/Button';
import { FlatFlex } from '@/components/atoms/FlatFlex';
import { ContainerDirectionType } from '@/components/atoms/FlatFlex/types';
import { Paragraph } from '@/components/atoms/Paragraph';
import type { Auth } from '@/components/contexts/AuthContext';
import { AuthContext, defaultAuthValue, SetAuthContext } from '@/components/contexts/AuthContext';
import { RouterPath } from '@/router';

export const MyPageTemplate = () => {
  const isFirstJumpedIn = useRef(true);
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const setAuth = useContext(SetAuthContext) as Dispatch<SetStateAction<Auth>>;
  const onClick = () => {
    isFirstJumpedIn.current = false;
    sessionStorage.setItem('authToken', JSON.stringify(defaultAuthValue));
    setAuth(defaultAuthValue);
  };

  useEffect(() => {
    if (auth.name === undefined) {
      /**
       * 주소창 localhost:3000/my-account으로 바로 들어오면 login으로 보내고
       * 마이페이지에서 로그아웃하면 /로 보내기
       */
      if (isFirstJumpedIn.current) {
        navigate(RouterPath.login);
      } else {
        navigate(RouterPath.root);
      }
    }
  });

  return (
    <FullHeightFlex flexDirection={ContainerDirectionType.column}>
      <Paragraph content={`${auth.name}님 안녕하세요!`} />
      <Margin />
      <Button size="small" theme="darkGray" onClick={onClick} style={{ maxWidth: '200px' }}>
        로그아웃
      </Button>
    </FullHeightFlex>
  );
};

const FullHeightFlex = styled(FlatFlex)`
  font-weight: 700;
  font-size: 36px;
  padding: 80px 0 120px;
`;

const Margin = styled.div`
  height: 64px;
`;
