import styled from '@emotion/styled';

interface ThemeHeaderProps {
  label: string;
  title: string;
  description: string;
  backgroundColor: string;
}

const ThemeHeader = ({ label, title, description, backgroundColor }: ThemeHeaderProps) => {
  return (
    <HeaderContainer backgroundColor={backgroundColor}>
      <HeaderLabel>{label}</HeaderLabel>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderDescription>{description}</HeaderDescription>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div<{ backgroundColor: string }>`
  padding: 25px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: white;
`;

const HeaderLabel = styled.div`
  font-size: 13px;
  margin-bottom: 10px;
  font-weight: bold;
  color: lightgray;

`;

const HeaderTitle = styled.h1`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const HeaderDescription = styled.p`
  font-size: 14px;
  color: lightgray;
`;

export default ThemeHeader;