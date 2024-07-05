import styled from '@emotion/styled';

import { Container } from '@/components/common/layouts/Container';
import { Grid } from '@/components/common/layouts/Grid';
import { getDynamicPath, ROUTE_PATHS } from '@/router/paths';

import { ItemImage } from './ItemImage';

export const ThemeCategory = () => {
  const themes = [
    { label: '생일', key: 'birthday' },
    { label: '졸업선물', key: 'graduation' },
    { label: '스몰럭셔리', key: 'small-luxury' },
    { label: '명품선물', key: 'luxury' },
    { label: '결혼/집들이', key: 'wedding' },
    { label: '따뜻한선물', key: 'warm-gift' },
    { label: '가벼운선물', key: 'light-gift' },
    { label: '팬심저격', key: 'fan-favorite' },
    { label: '교환권', key: 'exchange' },
    { label: '건강/비타민', key: 'health' },
    { label: '과일/한우', key: 'fruits-meat' },
    { label: '출산/키즈', key: 'kids' },
  ];

  return (
    <Wrapper>
      <Container>
        <Grid
          columns={{
            initial: 4,
            md: 6,
          }}
        >
          {themes.map((theme) => (
            <ItemImage
              key={theme.key}
              imageSrc="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
              label={theme.label}
              to={getDynamicPath(ROUTE_PATHS.THEME, { themeKey: theme.key })}
            />
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default ThemeCategory;

const Wrapper = styled.div`
  margin-top: 30px;
`;
