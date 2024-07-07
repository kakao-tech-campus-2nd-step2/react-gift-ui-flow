import { createContext, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Login from "@/pages/Login";
import Main from "@/pages/Main";
import MyAccount from "@/pages/MyAccount";
import Theme from "@/pages/Theme";

export const AuthTokenContext = createContext<string | null>(null);

const App = () => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const savedToken = sessionStorage.getItem("autoToken");

  useState(() => {
    if (savedToken) {
      setAuthToken(savedToken);
    }
  });

  return (
    <AuthTokenContext.Provider value={authToken}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/theme" element={<Navigate to="/" />} />
        <Route path="/theme/:themeKey" element={<Theme />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthTokenContext.Provider>
  );
};

export default App;
