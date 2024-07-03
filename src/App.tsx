import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Footer } from './components/common/Footer/Footer';
import { Header } from './components/common/Header/Header';
import MainPage from './pages/Main/MainPage';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
};

export default App;
