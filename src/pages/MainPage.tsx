import styled from '@emotion/styled';

import SelectGiftRecipient from '@/components/others/SelectGiftRecipient';
import ThemeCategory from '@/components/others/ThemeCategory';

const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  margin-top: 54px;
`;

const MainPage: React.FC = () => {
  return (
    <MainPageWrapper>
      <MainContent >
        <SelectGiftRecipient />
        <ThemeCategory />
      </MainContent>
    </MainPageWrapper>
  )
}

export default MainPage