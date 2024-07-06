import '../styles/ThemeHeader.css';

import React from 'react';

interface ThemeInfo {
  label: string;
  title: string;
  description: string;
  backgroundColor: string;
}

const themeSettings: { [key: string]: ThemeInfo } = {
  생일: {
    label: "생일",
    title: "특별한 날, 특별한 선물",
    description: "다양한 생일 선물 추천",
    backgroundColor: "#fdd7e4",
  },
  졸업선물: {
    label: "졸업선물",
    title: "새로운 시작을 축하해",
    description: "졸업을 축하하는 완벽한 선물",
    backgroundColor: "#e0e4cc",
  },
  스몰럭셔리: {
    label: "스몰럭셔리",
    title: "당신을 위한 작은 사치",
    description: "조금 더 특별한 순간을 선물하세요",
    backgroundColor: "#ffefd5",
  },
  명품선물: {
    label: "명품선물",
    title: "진정한 사치, 명품 선물",
    description: "눈부신 아이템으로 특별한 마음을 전하세요",
    backgroundColor: "#ffe4e1",
  },
  "결혼/집들이": {
    label: "결혼/집들이",
    title: "새로운 시작, 새 집의 행복",
    description: "결혼과 집들이 선물로 딱 맞는 아이템",
    backgroundColor: "#faf0e6",
  },
  "따뜻한-선물": {
    label: "따뜻한 선물",
    title: "마음까지 따뜻해지는 선물",
    description: "추운 겨울, 마음까지 따뜻하게 할 선물을 찾아보세요",
    backgroundColor: "#fdf5e6",
  },
  가벼운선물: {
    label: "가벼운선물",
    title: "일상에서 즐기는 작은 즐거움",
    description: "가볍게 즐길 수 있는 선물을 소개합니다",
    backgroundColor: "#b0e0e6",
  },
  팬심저격: {
    label: "팬심저격",
    title: "팬심을 저격할 선물",
    description: "좋아하는 스타를 위한 최고의 선물",
    backgroundColor: "#db7093",
  },
  교환권: {
    label: "교환권",
    title: "다양한 선택의 기회",
    description: "선물받은 이가 원하는 것을 직접 고를 수 있는 기회를 제공하세요",
    backgroundColor: "#98fb98",
  },
  "건강/비타민": {
    label: "건강/비타민",
    title: "건강을 선물하세요",
    description: "건강과 웰빙을 위한 최적의 선물",
    backgroundColor: "#3cb371",
  },
  "과일/한우": {
    label: "과일/한우",
    title: "신선한 맛의 선물",
    description: "질 좋은 과일과 한우를 선물하세요",
    backgroundColor: "#ff6347",
  },
  "출산/키즈": {
    label: "출산/키즈",
    title: "아이들을 위한 선물",
    description: "아이들의 성장에 도움을 주는 선물",
    backgroundColor: "#ff69b4",
  }
};
interface ThemeHeaderProps {
    themeKey: string;
  }
  const ThemeHeader: React.FC<ThemeHeaderProps> = ({ themeKey }) => {
    const theme = themeSettings[themeKey] || {
      label: "테마 선택",
      title: "테마를 선택해 주세요",
      description: "선택한 테마에 맞는 선물을 찾아보세요.",
      backgroundColor: "#fff"
    };
  
    return (
      <div style={{ backgroundColor: theme.backgroundColor}} className='container'>
        <div className='sub-container'>
        <h2 className='label'>{theme.label}</h2>
        <h1 className='title'>{theme.title}</h1>
        <p className='description'>{theme.description}</p>
        </div>
      </div>
    );
  };
  
  export default ThemeHeader;