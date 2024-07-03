import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter0-spacing: 16px;
  background-color: #fdf5e6;
  z-index: 3;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">선물하기</Link>
      <Link to="/login">Login</Link>
    </HeaderWrapper>
  );
};

export default Header;
