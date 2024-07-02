import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './pages/MainPage';
import ThemePage from './pages/ThemePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/theme/:themeKey" element={<ThemePage />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
