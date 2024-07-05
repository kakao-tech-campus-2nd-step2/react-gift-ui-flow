import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Nav>
                <TitleLink to="/">선물하기</TitleLink>
            </Nav>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 16px;
  background-color: #fff;
  position: fixed;
  width: 100%;
  max-width: 1024px;
  height: 59px;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  justify-content: space-between;
  display: flex;
  width: 100%;
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 20px;
  font-weight: bold;

  &:focus {
    outline: none;
  }
`;
