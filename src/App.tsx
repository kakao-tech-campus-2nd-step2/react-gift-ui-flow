import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from '@/components/common/Header';
import Login from '@/pages/Login';
import Main from '@/pages/Main';
import MyAccount from '@/pages/MyAccount';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main style={{ paddingTop: '54px' }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/my-account" element={<MyAccount />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
export default App;
