import styled from '@emotion/styled';

import ExBar from '@/pages/theme/components/ExBar';
import GiftItemList from '@/pages/theme/components/GiftItemList';

const ThemeContainer = styled.div`
  width: 100%;
`;

const ThemePage = () => {
  return (
    <ThemeContainer>
      <ExBar />
      <GiftItemList />
    </ThemeContainer>
  );
};

export default ThemePage;
