import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainPage from "@/pages/MainPage";
import ThemePage from "@/pages/ThemePage";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" Component={MainPage} />
          <Route path="/theme/:themeKey" Component={ThemePage} />
        </Routes>
      </Router>
  );
};

export default App;
