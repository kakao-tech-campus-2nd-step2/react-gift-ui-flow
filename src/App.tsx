import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from '@/pages/Login';
import MyAccount from '@/pages/MyAccount';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/login" element={<Login />} />
          <Route path="/my-account" element={<MyAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
