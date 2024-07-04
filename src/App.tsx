import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import ThemePage from './pages/ThemePage';

const App = () => {

  return (
    <div>
      <Router>
        <Header />
        <main>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/theme/:themeKey" element={<ThemePage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
