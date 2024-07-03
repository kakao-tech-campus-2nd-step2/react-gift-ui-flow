import { Route, Routes } from "react-router-dom";

import Login from "@/pages/Login";
import Main from "@/pages/Main";
import MyAccount from "@/pages/MyAccount";
import Theme from "@/pages/Theme";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/theme/:themeKey" element={<Theme />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-account" element={<MyAccount />} />
      </Routes>
    </div>
  );
};

export default App;
