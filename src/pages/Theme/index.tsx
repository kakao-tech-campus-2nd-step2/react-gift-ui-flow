import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

import ItemList from "./ItemList";
import ThemeHeader from "./ThemeHeader";

const themeKeys = ["life_small_gift"];

const Theme: React.FC = () => {
  const { themeKey } = useParams<{ themeKey: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!themeKey || !themeKeys.includes(themeKey)) {
      navigate("/");
    }
  }, [themeKey, navigate]);

  return (
    <div>
      <Header isLogin={false} />
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
