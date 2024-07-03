import styled from '@emotion/styled';

export type HeaderProps = {
    title: string;
  }

const HeaderContainer = styled.header`
  background-color: #fff;
  color: #333;
  padding: 10px 20px;
  font-size: 12px;
  font-weight: bold;
`;

const Header:React.FC<HeaderProps> = ({ title }) => (
  <HeaderContainer>
    <h1>{title}</h1>
  </HeaderContainer>
);

export default Header;
