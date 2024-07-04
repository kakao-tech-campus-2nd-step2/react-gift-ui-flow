import React from 'react';
import { Route, Routes as Switch} from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import MyAccountPage from "../pages/MyAccountPage";
import ThemePage from "../pages/ThemePage";

export const Routes:React.FC = () => {
    return(
        <Switch>
            <Route path = "/" element={<MainPage/>}/>
            <Route path = "/theme/:themeKey" element={<ThemePage/>}/>
            <Route path = "/login" element = {<LoginPage/>}/>
            <Route path = "/my-account" element={<MyAccountPage/>}/>
        </Switch>
    )
};