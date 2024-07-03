import styled from '@emotion/styled';

export type HeaderProps = {
  title: string;
  subtitle: string;
}

const HeaderContainer = styled.header`
  background-color: #fff;
  color: #333;
  padding: 20px calc(8% + 20px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  font-weight: bold;

  @media (max-width: 992px) {
    padding: 20px calc(4% + 20px);
  }

  @media (max-width: 768px) {
    padding: 20px 20px;
  }
  
`;

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => (
  <HeaderContainer>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </HeaderContainer>
);

export default Header;
