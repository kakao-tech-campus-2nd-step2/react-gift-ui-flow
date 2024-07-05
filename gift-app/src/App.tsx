import '@styles/reset.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Theme from './pages/Theme';
import Login from './pages/Login';
import MyAccount from './pages/MyAccount';
import { LoginProvider } from './hooks/LoginContext';
import Layout from './Layout/Layout';

function App() {
  return (
    <LoginProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Main /></Layout>} />
          <Route path="/theme/:themeKey" element={<Layout><Theme /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="/my-account" element={<Layout><MyAccount /></Layout>} />
        </Routes>
      </Router>
    </LoginProvider>
  );
}

export default App;