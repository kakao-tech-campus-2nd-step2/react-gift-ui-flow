import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "@/pages/LoginPage";
import MainPage from "@/pages/MainPage";
import MyAccountPage from "@/pages/MyAccountPage";
import ThemePage from "@/pages/ThemePage";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" Component={MainPage} />
          <Route path="/theme/:themeKey" Component={ThemePage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/my-account" Component={MyAccountPage} />
        </Routes>
      </Router>
  );
};

export default App;
