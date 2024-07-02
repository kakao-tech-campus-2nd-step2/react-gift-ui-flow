import { Grid } from './layouts/Grid';
import { Container } from './layouts/Container';
import styled from '@emotion/styled';
import Theme from './Theme';

export default function ThemeList() {
  const themeNames1 = ['생일', '졸업선물', '스몰럭셔리', '명품선물', '결혼/집들이', '따뜻한선물'];
  const themeNames2 = ['가벼운선물', '팬심저격', '교환권', '건강/비타민', '과일/한우', '출산/키즈'];

  const renderThemetop = () =>
    themeNames1.map((themeName, index) => (
      <Theme
        key={`top-${index}`}
        themeKey="life_small_gift"
        themeName={themeName}
        imgsrc="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
      />
    ));

  const renderThemebottom = () =>
    themeNames2.map((themeName, index) => (
      <Theme
        key={`bottom-${index}`}
        themeKey="life_small_gift"
        themeName={themeName}
        imgsrc="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
      />
    ));

  return (
    <ThemeListWrapper>
      <Container maxWidth="1024px">
        <Grid columns={6}>{renderThemetop()}</Grid>
        <Grid columns={6}>{renderThemebottom()}</Grid>
      </Container>
    </ThemeListWrapper>
  );
}

const ThemeListWrapper = styled.section`
  width: 100vw;
  height: 416px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
