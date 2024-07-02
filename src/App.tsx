import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login';
import Main from './pages/main/Main';
import MyAccount from './pages/MyAccount';
import LifeSmallGift from './pages/Theme';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/my-account" element={<MyAccount />} />
        </Routes>
        <Routes>
          <Route path="/theme/life_small_gift" element={<LifeSmallGift />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
