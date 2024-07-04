import styled from '@emotion/styled';

export type HeaderProps = {
  title: string;
  subtitle: string;
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



const Header: React.FC<HeaderProps> = ({ title, subtitle }) => (
  <HeaderContainer>
    <HeaderTitle>{title}</HeaderTitle>
    <h2>{subtitle}</h2>
  </HeaderContainer>
);

export default Header;
