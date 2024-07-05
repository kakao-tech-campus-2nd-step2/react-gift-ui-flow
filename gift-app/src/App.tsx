import '@styles/reset.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Theme from './pages/Theme';
import Login from './pages/Login';
import MyAccount from './pages/MyAccount';
import { LoginProvider } from './hooks/LoginContext';
import Layout from './Layout/Layout';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <LoginProvider>
      <Router>
        <Routes>
            <Route path="/login" element={<Layout><Login /></Layout>} />
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <Routes>
                    <Route path="/" element={<Layout><Main /></Layout>} />
                    <Route path="/theme/:themeKey" element={<Layout><Theme /></Layout>} />
                    <Route path="/my-account" element={<Layout><MyAccount /></Layout>} />
                  </Routes>
                </ProtectedRoute>
              }
            />
          </Routes>
      </Router>
    </LoginProvider>
  );
}

export default App;