import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { Container } from '@/components/common/Layout/Container';
import { useAuth } from '@/hooks/useAuth';
export const Header = () => {
  const { authToken } = useAuth();
  return (
    <HeaderWrapper>
      <Container flexDirection="row" justifyContent="space-between" alignItems="center" maxWidth="1024px">
        <Link to="/">
          <Logo src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png" alt="선물하기" />
        </Link>
        {authToken ? <Link to="/my-account">내 계정</Link> : <Link to="/login">로그인</Link>}
      </Container>
    </HeaderWrapper>
  );
};
const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 54px;
  background-color: white;
  padding: 0px 20px;
  font-size: 14px;
`;

const Logo = styled.img`
  height: 54px;
`;
