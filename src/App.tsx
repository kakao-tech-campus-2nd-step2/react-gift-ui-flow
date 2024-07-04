import styled from '@emotion/styled';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './routes/Main';
import ThemePage from './routes/ThemePage';
import Footer from './components/Footer';

const App = () => {
  return (
    <AppContainer>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/theme/life_small_gift" element={<ThemePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div``;
