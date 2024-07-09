import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import ThemeDetails from '@/components/Gift/ThemeDetails';
import { Navigate } from 'react-router-dom';
import type { Theme } from '@/components/Gift/ThemeDetails';
import routePath from '@/routes/path';

interface TitleProps {
  backgroundColor: string;
}

const GiftHeader = () => {
  const { themekey } = useParams();
  const themeExists = themekey && themekey in ThemeDetails;
  if (!themeExists) return <Navigate to={routePath.home} replace />;

  const theme: Theme | undefined = ThemeDetails[themekey];

  return (
    <Title backgroundColor={theme.backgroundColor}>
      <H3>{theme.label}</H3>
      <H1>{theme.title}</H1>
      <H2>{theme.description}</H2>
    </Title>
  );
};

export default GiftHeader;

const Title = styled.div<TitleProps>`
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
  padding: 20px;
`;
const H1 = styled.h1`
  color: white;
  font-weight: 700;
`;

const H2 = styled.h2`
  color: rgba(255, 255, 255, 0.55);
  font-weight: 700;
`;

const H3 = styled.h3`
  color: rgba(255, 255, 255, 0.55);
  font-weight: 700;
`;
