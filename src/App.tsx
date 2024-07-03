import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

const App = () => {

  return (
    <div>
      <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
    <Footer />
  </Router>
    </div>
  );
};

export default App;
