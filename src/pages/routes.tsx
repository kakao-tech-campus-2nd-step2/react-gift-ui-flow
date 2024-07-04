import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginPage from "./LoginPage/LoginPage";
import MainPage from "./MainPage/MainPage";
import MyAccountPage from "./MyAccountPage/MyAccountPage";
import ThemeDetailPage from "./ThemePage/ThemeDetailPage";
import ThemePage from "./ThemePage/ThemePage";

const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/theme/:themeKey" component={ThemePage} />
                <Route path="/theme" component={ThemeDetailPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/my-account" component={MyAccountPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default MainRoutes;