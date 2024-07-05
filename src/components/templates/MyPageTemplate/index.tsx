import styled from '@emotion/styled';
import type { Dispatch, SetStateAction } from 'react';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/atoms/Button';
import { FlatFlex } from '@/components/atoms/FlatFlex';
import { ContainerDirectionType } from '@/components/atoms/FlatFlex/types';
import { Paragraph } from '@/components/atoms/Paragraph';
import type { Auth } from '@/components/contexts/AuthContext';
import { AuthContext, defaultAuthValue, SetAuthContext } from '@/components/contexts/AuthContext';

export const MyPageTemplate = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const setAuth = useContext(SetAuthContext) as Dispatch<SetStateAction<Auth>>;
  const onClick = () => {
    sessionStorage.setItem('authToken', JSON.stringify(defaultAuthValue));
    setAuth(defaultAuthValue);
    navigate('/');
  };

  useEffect(() => {
    if (auth.name === undefined) {
      navigate('login');
    }
  }, [auth.name, navigate]);

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
