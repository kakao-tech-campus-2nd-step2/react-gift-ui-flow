import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthProvider } from './AuthContext';
import MainPage from './page/MainPage';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
