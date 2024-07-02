// import React from "react";
import { BrowserRouter , Route,Routes } from "react-router-dom";

import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/Header";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import MyAccount from "@/pages/MyAccount";
import Theme from "@/pages/Theme";

const Router = () => {
	  return (
	<BrowserRouter>
	<Header />
	  <Routes>
		<Route path="/" element={<Home />} />
		<Route path="/theme" element={<Theme />} />
		<Route path="/login" element={<Login />} />
		<Route path="/my-account" element={<MyAccount />} />
	  </Routes>
	  <Footer />
	</BrowserRouter>
  );
};

export default Router;