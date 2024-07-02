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

    @media (max-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
    }
}`;

const ThemeItemConfig = [
  '생일',
  '졸업선물',
  '스몰럭셔리',
  '명품선물',
  '결혼/집들이',
  '따듯한 선물',
  '가벼운 선물',
  '팬심저격',
  '교환권',
  '건강/비타민',
  '과일/한우',
  '출산/키즈',
];

const Theme = () => {
  return (
    <StyledTheme>
      <GridContainer>
        {ThemeItemConfig.map((themeKey) => (
          <ThemeItem key={themeKey} themeKey={themeKey} />
        ))}
      </GridContainer>
    </StyledTheme>
  );
};
export default Theme;
