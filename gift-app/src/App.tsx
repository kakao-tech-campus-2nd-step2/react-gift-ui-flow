import '@styles/reset.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main'
import Theme from './pages/Theme';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/theme/:themeKey" element={<Theme />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;