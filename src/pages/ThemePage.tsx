import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';

import { Header } from '@/components/common/Header/ThemeHeader/Header';
import { ThemeItemSection } from '@/components/section/Theme/ThemeItemSection';

const ThemePage = () => {
  const { themeKey } = useParams<{ themeKey: string }>();
  const defaultThemeKey = themeKey || 'life_small_gift';

  return (
    <Wrapper>
      <Header themeKey={defaultThemeKey} />
      <ThemeItemSection />
    </Wrapper>
  );
};

export default ThemePage;

const Wrapper = styled.div({
  width: '100%',
  position: 'absolute',
  top: '0px',
  left: '0px',
  marginTop: '54px',
});
