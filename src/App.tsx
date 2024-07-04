import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from '@/components/common/Layouts/Footer/Footer';
import Header from '@/components/common/Layouts/Header/Header';
import MainPage from "@/pages/MainPage";
import ThemePage from "@/pages/ThemePage";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path="/theme/:themeKey" Component={ThemePage} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
