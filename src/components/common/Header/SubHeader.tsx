import styled from '@emotion/styled';

export type HeaderProps = {
  label: string;
  title: string;
  description: string;
  backgroundColor: string;
}

const HeaderContainer = styled.header<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: #fff;
  height: 150px;
  padding: 20px calc(8% + 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 10px;

  @media (max-width: 768px) {
    padding: 20px 20px;
  }
  
`;

const HeaderLabel = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #ADADAD;
`;

const HeaderTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 10px;
`;

const HeaderDescription = styled.h2`
  font-size: 20px;
  color: #ADADAD;
`;

const Header: React.FC<HeaderProps> = ({ label, title, description, backgroundColor }) => (
  <HeaderContainer backgroundColor={backgroundColor}>
    <HeaderLabel>{label}</HeaderLabel>
    <HeaderTitle>{title}</HeaderTitle>
    <HeaderDescription>{description}</HeaderDescription>
  </HeaderContainer>
);

export default Header;
