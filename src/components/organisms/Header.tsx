import styled from '@emotion/styled';

import { Container } from '@/components/atoms/Container';
import { Profile } from '@/components/molecules/Profile/Profile';
import { 선물하기 } from '@/components/molecules/선물하기/선물하기';

const HEADER_HEIGHT = '58px';

export const Header = () => {
  const auth = { name: '' };
  return (
    <HeaderWrapper>
      <Container justifyContent="space-between">
        <선물하기 height={HEADER_HEIGHT} />
        <Profile {...auth} />
      </Container>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: calc(100% - 32px);
  margin: 0 auto;
`;
