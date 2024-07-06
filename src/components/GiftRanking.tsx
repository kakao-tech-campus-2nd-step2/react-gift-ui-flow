import './styles/GiftRanking.css';

import React, { useState } from 'react';

interface Gift {
  id: number;
  image: string;
  price: string;
  name: string;
  rank: number;
  category: Category;
  subCategory: SubCategory;
}

type Category = 'all' | 'women' | 'men' | 'teenagers';
type SubCategory = 'wanted' | 'gifted' | 'wishlisted';

const CATEGORY_LABELS: Record<Category, string> = {
  all: 'ALL',
  women: '👩🏻‍🦳',
  men: '👨🏻‍🦳',
  teenagers: '👦🏻',
};

const CATEGORY_NAMES: Record<Category, string> = {
  all: '전체',
  women: '여성이',
  men: '남성이',
  teenagers: '청소년이',
};

const SUBCATEGORY_LABELS: Record<SubCategory, string> = {
  wanted: '받고 싶어한',
  gifted: '많이 선물한',
  wishlisted: '위시로 받은',
};

const GiftRanking: React.FC = () => {
  const [filter, setFilter] = useState<Category>('all');
  const [subFilter, setSubFilter] = useState<SubCategory>('wanted');
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleFilterChange = (newFilter: Category): void => {
    setFilter(newFilter);
  };

  const handleSubFilterChange = (newSubFilter: SubCategory): void => {
    setSubFilter(newSubFilter);
  };

  const toggleShowMore = (): void => {
    setShowMore(!showMore);
  };

  const generateGifts = (): Gift[] => {
    const categories: Category[] = ['all', 'women', 'men', 'teenagers'];
    const subCategories: SubCategory[] = ['wanted', 'gifted', 'wishlisted'];
    const gifts: Gift[] = [];

    categories.forEach(category => {
      subCategories.forEach(subCategory => {
        for (let i = 1; i <= 12; i++) {
          gifts.push({
            id: gifts.length + 1,
            image: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
            price: '29000원',
            name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
            rank: i,
            category: category,
            subCategory: subCategory
          });
        }
      });
    });

    return gifts;
  };

  const allGifts = generateGifts();
  const filteredGifts = allGifts.filter(gift => gift.category === filter && gift.subCategory === subFilter);
  const displayedGifts = showMore ? filteredGifts : filteredGifts.slice(0, 6);

  return (
    <div className="gift-section">
      <div className="gift-ranking-header">
        <h3>실시간 급상승 선물랭킹</h3>
        <div className="gift-ranking-buttons">
          {Object.keys(CATEGORY_LABELS).map((category) => (
            <div key={category} className={`button-container ${filter === category ? 'active' : ''}`} onClick={() => handleFilterChange(category as Category)}>
              <button>
                <span>{CATEGORY_LABELS[category as Category]}</span>
              </button>
              <span className="category">{CATEGORY_NAMES[category as Category]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="sub-ranking-buttons">
        {Object.keys(SUBCATEGORY_LABELS).map((subCategory) => (
          <button key={subCategory} className={subFilter === subCategory ? 'active' : ''} onClick={() => handleSubFilterChange(subCategory as SubCategory)}>
            {SUBCATEGORY_LABELS[subCategory as SubCategory]}
          </button>
        ))}
      </div>
      <div className="gift-items">
        {displayedGifts.map((gift, index) => (
          <div key={gift.id} className={`gift-item ${index < 3 ? 'top-three' : ''}`}>
            <div className="rank-badge">{index + 1}</div>
            <img src={gift.image} alt={gift.name} />
            <p className="gift-store">BBQ</p>
            <p className="gift-info">{gift.name}</p>
            <p className="price">{gift.price}</p>
          </div>
        ))}
      </div>
      <button className="load-more-button" onClick={toggleShowMore}>
        {showMore ? '접기' : '더보기'}
      </button>
    </div>
  );
};

export default GiftRanking;
