import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Theme from "@pages/Theme";
import Main from "@pages/Main";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route path="/" element={<Main />} />
                <Route path="/theme/:themeKey" element={<Theme />} />
            </Route>
        </Routes>
    );
};

export default App;
