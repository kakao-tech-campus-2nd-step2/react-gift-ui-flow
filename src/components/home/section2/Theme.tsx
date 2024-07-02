import styled from '@emotion/styled';

import InnerStyle from '@/styles/innerStyle';

import ThemeItem from './ThemeItem';

const StyledTheme = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 45px 0 24px 0;
`;

const GridContainer = styled(InnerStyle)`
    width: 100%;
    display: grid;
    gap: 0px;
		grid-template-columns: repeat(6, 1fr);
}`;

const Theme = () => {
  return (
    <StyledTheme>
      <GridContainer>
        <ThemeItem themeKey={'생일'} />
        <ThemeItem themeKey={'졸업선물'} />
        <ThemeItem themeKey={'스몰럭셔리'} />
        <ThemeItem themeKey={'명품선물'} />
        <ThemeItem themeKey={'결혼/집들이'} />
        <ThemeItem themeKey={'따듯한 선물'} />
        <ThemeItem themeKey={'가벼운 선물'} />
        <ThemeItem themeKey={'팬심저격'} />
        <ThemeItem themeKey={'교환권'} />
        <ThemeItem themeKey={'건강/비타민'} />
        <ThemeItem themeKey={'과일/한우'} />
        <ThemeItem themeKey={'출산/키즈'} />
      </GridContainer>
    </StyledTheme>
  );
};
export default Theme;
