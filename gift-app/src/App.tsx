import '@styles/reset.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main'
import Theme from './pages/Theme';
import Login from './pages/Login';
import MyAccount from './pages/MyAccount';
import { LoginProvider } from './hooks/LoginContext';

function App() {
  return (
    <LoginProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/theme/:themeKey" element={<Theme />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-account" element={<MyAccount />} />
        </Routes>
      </Router>
    </LoginProvider>
  );
}

export default App;