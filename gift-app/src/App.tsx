import '@styles/reset.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main'
import Theme from './pages/Theme';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/theme" element={<Theme />} />
      </Routes>
    </Router>
  );
}

export default App;