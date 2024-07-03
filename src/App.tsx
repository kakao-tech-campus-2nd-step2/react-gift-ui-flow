import styled from '@emotion/styled';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Footer />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  padding: 0 120px;
`;
