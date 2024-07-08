import styled from '@emotion/styled';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ContainerJustifyContentType } from '@/components/atoms/FlatFlex/types';
import { CenteringContainer } from '@/components/molecules/CenteringContainer';
import { Profile } from '@/components/molecules/Profile';
import { 선물하기 } from '@/components/molecules/선물하기/선물하기';
import { AuthContext } from '@/contexts/AuthContext';
import { RouterPath } from '@/router';
const HEADER_HEIGHT = '58px';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useContext(AuthContext);
  const onClick = () => {
    if (auth.name === undefined) {
      // 해당 경우 이후 로직에서 state를 사용은 안하지만 state 통일성을 위해
      navigate(RouterPath.login, { state: { previousPage: location.pathname } });
      return;
    }
    navigate(RouterPath.myAccount, { state: { previousPage: location.pathname } });
  };

  return (
    <HeaderWrapper>
      <CenteringContainer justifyContent={ContainerJustifyContentType.spaceBetween}>
        <선물하기 height={HEADER_HEIGHT} />
        <Profile {...auth} onClick={onClick} />
      </CenteringContainer>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: calc(100% - 32px);
  max-width: 1024px;
  margin: 0 auto;
`;
