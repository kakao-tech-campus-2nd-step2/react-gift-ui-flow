import styled from '@emotion/styled';
import type { ReactNode } from 'react';

export type HeaderProps = {
  children: ReactNode;
}

const HeaderContainer = styled.header`
  background-color: #fff;
  color: #333;
  padding: 20px calc(8% + 100px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  font-weight: bold;

  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`;

const HeaderTitle = styled.h1`
  font-weight: bold;
`;

const HeaderSubtitle = styled.h2`
  font-size: 14px;
  font-weight: normal;
`;

const Header: React.FC<HeaderProps> = ({ children }) => (
  <HeaderContainer>
    {children}
  </HeaderContainer>
);

export { HeaderSubtitle, HeaderTitle };

export default Header;
