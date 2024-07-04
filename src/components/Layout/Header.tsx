import styled from '@emotion/styled';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserInfo } from '@/providers/UserInfoProviders';
import { breakpoints } from '@/styles/variants';

import { ROUTE_PATHS } from '../Routes/constants';

export const Header = () => {
  const { userName } = useContext(UserInfo);
  const auth = sessionStorage.getItem('authToken');
  return (
    <Wrapper>
      <Cotainer>
        <Logo>
          <Link to={ROUTE_PATHS.ROOT}>선물하기</Link>
        </Logo>
        <Link to={userName === auth ? '/my-account' : '/login'}>
          {userName === auth ? '내 계정' : '로그인'}
        </Link>
      </Cotainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
`;
const Cotainer = styled.div`
  max-width: ${breakpoints.md};
  margin: 0 auto;
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
