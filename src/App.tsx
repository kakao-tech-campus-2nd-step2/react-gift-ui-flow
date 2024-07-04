import styled from '@emotion/styled';

import Footer from '@/components/common/Layouts/Footer/Footer';
import Header from '@/components/common/Layouts/Header/Header';

import SelectGiftRecipient from './components/others/SelectGiftRecipient';

const AppWrapper = styled.div`
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

const App = () => {
  return (
    <AppWrapper>
      <Header />

      <MainContent>
        <SelectGiftRecipient />
      </MainContent>

      <Footer />
    </AppWrapper>
  );
};

export default App;
