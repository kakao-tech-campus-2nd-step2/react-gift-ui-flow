import styled from '@emotion/styled';
import type { MouseEvent } from 'react';

import { Container } from '@/components/atoms/Container';
import { ContainerJustifyContentType } from '@/components/atoms/Container/types';
import { Profile } from '@/components/molecules/Profile';
import { 선물하기 } from '@/components/molecules/선물하기/선물하기';

const HEADER_HEIGHT = '58px';

export const Header = () => {
  const auth = { name: undefined };
  const onClick = (event: MouseEvent) => {
    event.preventDefault();
    alert('hi');
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
  margin: 0 auto;
`;
