import styled from '@emotion/styled';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ContainerJustifyContentType } from '@/components/atoms/FlatFlex/types';
import { AuthContext } from '@/components/contexts/AuthContext';
import { Container } from '@/components/molecules/Container';
import { Profile } from '@/components/molecules/Profile';
import { 선물하기 } from '@/components/molecules/선물하기/선물하기';
const HEADER_HEIGHT = '58px';

export const Header = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const onClick = () => {
    if (auth.name === undefined) {
      navigate('/login');
      return;
    }
    navigate('/my-account');
  };

  return (
    <HeaderWrapper>
      <Container justifyContent={ContainerJustifyContentType.spaceBetween}>
        <선물하기 height={HEADER_HEIGHT} />
        <Profile {...auth} onClick={onClick} />
      </Container>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: calc(100% - 32px);
  max-width: 1024px;
  margin: 0 auto;
`;
