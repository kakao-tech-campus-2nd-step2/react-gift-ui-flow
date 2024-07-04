import styled from '@emotion/styled';

import Footer from '@/components/common/Layouts/Footer/Footer';
import Header from '@/components/common/Layouts/Header/Header';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <MainContent />
      <Footer />
    </AppWrapper>
  );
};

export default App;
