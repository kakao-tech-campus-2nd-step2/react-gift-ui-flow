import styled from '@emotion/styled';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './routes/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <AppContainer>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  padding: 0 120px;
`;
