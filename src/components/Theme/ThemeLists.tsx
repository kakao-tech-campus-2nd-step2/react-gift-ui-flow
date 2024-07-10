// import { Link } from "react-router-dom";

import ThemeItems from "./ThemeItems";

const ThemeCategories = [
  {themeKey: "birthday", themeLabel: "생일", imgSrc: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202403/09/21e88381-7867-410a-b0c3-5d6c9cd430b1.jpg"},
  {themeKey: "graduation", themeLabel:"졸업선물", imgSrc: "https://news.nateimg.co.kr/orgImg/tn/2024/06/09/tn_1718018944966_695199_0.jpg"},
  {themeKey: "smallLuxuries", themeLabel:"스몰럭셔리", imgSrc: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202403/09/21e88381-7867-410a-b0c3-5d6c9cd430b1.jpg"},
  {themeKey: "luxuries", themeLabel:"명품선물", imgSrc: "https://news.nateimg.co.kr/orgImg/tn/2024/06/09/tn_1718018944966_695199_0.jpg"},
  {themeKey: "wedding", themeLabel:"결혼/집들이", imgSrc: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202403/09/21e88381-7867-410a-b0c3-5d6c9cd430b1.jpg"},
  {themeKey: "따뜻한선물", themeLabel:"따뜻한선물", imgSrc: "https://news.nateimg.co.kr/orgImg/tn/2024/06/09/tn_1718018944966_695199_0.jpg"},
  {themeKey: "가벼운선물", themeLabel:"가벼운선물", imgSrc: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202403/09/21e88381-7867-410a-b0c3-5d6c9cd430b1.jpg"},
  {themeKey: "팬심저격", themeLabel:"팬심저격", imgSrc: "https://news.nateimg.co.kr/orgImg/tn/2024/06/09/tn_1718018944966_695199_0.jpg"},
  {themeKey: "giftcards", themeLabel:"교환권", imgSrc: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202403/09/21e88381-7867-410a-b0c3-5d6c9cd430b1.jpg"},
  {themeKey: "healthcare", themeLabel:"건강/비타민", imgSrc: "https://news.nateimg.co.kr/orgImg/tn/2024/06/09/tn_1718018944966_695199_0.jpg"},
  {themeKey: "fruits", themeLabel:"과일/한우", imgSrc: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202403/09/21e88381-7867-410a-b0c3-5d6c9cd430b1.jpg"},
  {themeKey: "kids", themeLabel:"출산/키즈", imgSrc: "https://news.nateimg.co.kr/orgImg/tn/2024/06/09/tn_1718018944966_695199_0.jpg"},
]

export const ThemeLists = () => {
  return(
    <>
      {ThemeCategories.map((item)=> ( 
          <ThemeItems themeKey={item.themeKey} themeLabel={item.themeLabel} imgSrc={item.imgSrc} />
    ))}
    </>
  );
};