import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { AuthTokenContext } from "@/App";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

import ItemList from "./ItemList";
import ThemeHeader from "./ThemeHeader";
import { Themes } from "./ThemeHeader";

const themeKeys = Object.keys(Themes);

const Theme: React.FC = () => {
  const authToken = useContext(AuthTokenContext);
  const { themeKey } = useParams<{ themeKey: string }>();

  if (authToken) {
    // 로그인 O
    console.log("로그인 O");
  } else {
    // 로그인 X
    console.log("로그인 X");
  }

  if (!themeKey || !themeKeys.includes(themeKey)) {
    location.href = "/";
  }

  return (
    <div>
      <Header />
      {themeKey && <ThemeHeader themeKey={themeKey} />}
      <ItemList children={themeItems} />
      <Footer />
    </div>
  );
};

export default Theme;

const themeItems = Array.from({ length: 21 }, () => ({
  imageSrc:
    "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg",
  subtitle: "BBQ",
  title: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
  amount: 29000,
}));
