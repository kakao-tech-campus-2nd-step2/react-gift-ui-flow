import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';

import ThemeGiftGrid from '@/components/ThemePage/ThemeGifts';
import Header from '@/components/ThemePage/ThemeHeader';

const Wrapper = styled.div`
  height: auto;
  min-height: 100%;
`;

export const ThemePage = () => {
  const { themeKey } = useParams<{ themeKey: string }>();

  return (
    <Wrapper>
      {themeKey && <Header themeKey={themeKey} />}

      <ThemeGiftGrid />
    </Wrapper>
  );
};

export default ThemePage;
