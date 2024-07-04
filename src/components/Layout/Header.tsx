import styled from '@emotion/styled';

import { breakpoints } from '@/styles/variants';

export const Header = () => {
  return (
    <Wrapper>
      <Cotainer>
        <Logo>선물하기</Logo>
        <LoginButton>로그인</LoginButton>
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
  cursor: pointer;
`;
const LoginButton = styled.div`
  cursor: pointer;
`;
