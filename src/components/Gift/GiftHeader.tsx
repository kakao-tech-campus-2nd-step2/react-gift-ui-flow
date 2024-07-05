import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import ThemeDetails from '@/components/Gift/ThemeDetails';
import { Navigate } from 'react-router-dom';
import type { Theme } from '@/components/Gift/ThemeDetails';

const ThemePage = () => {
  const { themekey } = useParams();
  const themeExists = themekey && themekey in ThemeDetails;
  if (!themeExists) <Navigate to="/" replace />;
  return ThemeDetails[themekey as string];
}; // ThemeDetails에 존재하지 않은 themeKey일 경우 main page로 리다이렉션

const GiftHeader = () => {
  const theme: Theme = ThemePage();

  return (
    <Title backgroundColor={theme.backgroundColor}>
      <H3>{theme.label}</H3>
      <H1>{theme.title}</H1>
      <H2>{theme.description}</H2>
    </Title>
  );
};

export default GiftHeader;

interface TitleProps {
  backgroundColor: string;
}

// Title은 flex-direction: row;를 가지고 있습니다.
const Title = styled.div<TitleProps>`
  display: flex; /* Flexbox를 활성화 */
  flex-direction: column; /* 자식 요소들을 가로 방향으로 배치 */
  gap: 30px; /* 자식 요소들 사이에 30px 간격을 줌 */
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
  padding: 20px;
`;
const H1 = styled.h1`
  color: white; /* h1의 색상 설정 */
  font-weight: 700;
`;

const H2 = styled.h2`
  color: rgba(255, 255, 255, 0.55); /* h2의 색상 설정 */
  font-weight: 700;
`;

const H3 = styled.h3`
  color: rgba(255, 255, 255, 0.55); /* h3의 색상 설정 */
  font-weight: 700;
`;
