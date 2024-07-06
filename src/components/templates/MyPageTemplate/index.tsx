import styled from '@emotion/styled';
import type { Dispatch, SetStateAction } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/atoms/Button';
import { FlatFlex } from '@/components/atoms/FlatFlex';
import { ContainerDirectionType } from '@/components/atoms/FlatFlex/types';
import { Paragraph } from '@/components/atoms/Paragraph';
import type { Auth } from '@/contexts/AuthContext';
import { AuthContext, defaultAuthValue, SetAuthContext } from '@/contexts/AuthContext';
import { RouterPath } from '@/router';

export const MyPageTemplate = () => {
  const auth = useContext(AuthContext);
  const setAuth = useContext(SetAuthContext) as Dispatch<SetStateAction<Auth>>;
  const navigate = useNavigate();
  const onClick = () => {
    sessionStorage.setItem('authToken', JSON.stringify(defaultAuthValue));
    navigate(RouterPath.root);
    setAuth(defaultAuthValue);
  };

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
