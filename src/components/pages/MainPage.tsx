import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const themes = [
    { key: 'birthday', label: '생일', image: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png' },
    { key: 'graduation_gift', label: '졸업선물', image: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png' },
    { key: 'small_luxury', label: '스몰럭셔리', image: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png' },
    { key: 'luxury_gift', label: '명품선물', image: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png' },
    { key: 'wedding_housewarming', label: '결혼/집들이', image: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png' },
    { key: 'warm_gift', label: '따뜻한 선물', image: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png' },
    { key: 'light_gift', label: '가벼운 선물', image: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png' },
    { key: 'practical_gift', label: '편식적인', image: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png' },
    { key: 'exchange_ticket', label: '교환권', image: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png' },
    { key: 'health_vitamins', label: '건강/비타민', image: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png' },
    { key: 'fruits_hanwoo', label: '과일/한우', image: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png' },
    { key: 'baby_kids', label: '출산/키즈', image: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png' },
  ];

  const initialGifts = [
    { id: 1, name: 'BBQ 양념치킨+콜라1.25L', price: '29000원', image: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg' },
    { id: 2, name: 'BBQ 양념치킨+콜라1.25L', price: '29000원', image: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg' },
    { id: 3, name: 'BBQ 양념치킨+콜라1.25L', price: '29000원', image: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg' },
    { id: 4, name: 'BBQ 양념치킨+콜라1.25L', price: '29000원', image: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg' },
    { id: 5, name: 'BBQ 양념치킨+콜라1.25L', price: '29000원', image: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg' },
    { id: 6, name: 'BBQ 양념치킨+콜라1.25L', price: '29000원', image: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg' },
    { id: 7, name: 'BBQ 양념치킨+콜라1.25L', price: '29000원', image: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg' },
    { id: 8, name: 'BBQ 양념치킨+콜라1.25L', price: '29000원', image: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg' },
    { id: 9, name: 'BBQ 양념치킨+콜라1.25L', price: '29000원', image: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg' },
    { id: 10, name: 'BBQ 양념치킨+콜라1.25L', price: '29000원', image: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg' },
    { id: 11, name: 'BBQ 양념치킨+콜라1.25L', price: '29000원', image: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg' },
    { id: 12, name: 'BBQ 양념치킨+콜라1.25L', price: '29000원', image: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg' },
    { id: 13, name: 'BBQ 양념치킨+콜라1.25L', price: '29000원', image: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg' },
    { id: 14, name: 'BBQ 양념치킨+콜라1.25L', price: '29000원', image: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg' },
    { id: 15, name: 'BBQ 양념치킨+콜라1.25L', price: '29000원', image: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg' },
    { id: 16, name: 'BBQ 양념치킨+콜라1.25L', price: '29000원', image: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg' },
    { id: 17, name: 'BBQ 양념치킨+콜라1.25L', price: '29000원', image: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg' },
    { id: 18, name: 'BBQ 양념치킨+콜라1.25L', price: '29000원', image: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg' },

  ];
  const [giftList] = useState(initialGifts);
  const [visibleGifts, setVisibleGifts] = useState<number>(6);
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedFilter, setSelectedFilter] = useState('받고 싶어한');

  const handleLoadMore = () => {
    setVisibleGifts(initialGifts.length);
  };

  const handleShowLess = () => {
    setVisibleGifts(6);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleFilterChange = (newFilter: string) => {
    setSelectedFilter(newFilter);
  };

  return (
    <div className="main-container">
      {/* Theme 카테고리 섹션 */}
      <section className="theme-section">
        <ul className="theme-list">
          {themes.map(theme => (
            <li key={theme.key} onClick={() => navigate(`/theme/${theme.key}`)}>
              <img src={theme.image} alt={theme.label} />
              <span>{theme.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 실시간 급상승 선물랭킹 */}
      <section className="ranking-section">
        <h2>실시간 급상승 선물랭킹</h2>
        <div className="filter-group">
          <div className="filter-buttons">
            <button 
              className={`filter-button ${selectedCategory === '전체' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('전체')}
            >
              전체
            </button>
            <button 
              className={`filter-button ${selectedCategory === '여성이' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('여성이')}
            >
              여성이
            </button>
            <button 
              className={`filter-button ${selectedCategory === '남성이' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('남성이')}
            >
              남성이
            </button>
            <button 
              className={`filter-button ${selectedCategory === '청소년이' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('청소년이')}
            >
              청소년이
            </button>
          </div>
          <div className="filter-buttons">
            <button 
              className={`filter-button ${selectedFilter === '받고 싶어한' ? 'active' : ''}`}
              onClick={() => handleFilterChange('받고 싶어한')}
            >
              받고 싶어한
            </button>
            <button 
              className={`filter-button ${selectedFilter === '많이 선물한' ? 'active' : ''}`}
              onClick={() => handleFilterChange('많이 선물한')}
            >
              많이 선물한
            </button>
            <button 
              className={`filter-button ${selectedFilter === '위시로 받은' ? 'active' : ''}`}
              onClick={() => handleFilterChange('위시로 받은')}
            >
              위시로 받은
            </button>
          </div>
        </div>
        <ul className="gift-list">
          {giftList.slice(0, visibleGifts).map((gift) => (
             <li key={gift.id} className="gift-item">
             <img src={gift.image} alt={gift.name} className="gift-image" />
             <p>{gift.name}</p>
             <p>{gift.price}</p>
           </li>
          ))}
        </ul>
        {visibleGifts < giftList.length ? (
          <button onClick={handleLoadMore} className="load-more-button">더보기</button>
        ) : (
          <button onClick={handleShowLess} className="show-less-button">접기</button>
        )}
      </section>
    </div>
  );
};

export default MainPage;
