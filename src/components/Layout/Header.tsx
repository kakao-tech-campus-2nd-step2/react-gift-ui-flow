import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { breakpoints } from '@/styles/variants';

export const Header = () => {
  return (
    <Wrapper>
      <Cotainer>
        <Logo>
          <Link to="/">선물하기</Link>
        </Logo>
        <Link to="/login">로그인</Link>
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
