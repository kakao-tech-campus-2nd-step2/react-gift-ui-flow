import '../styles/ThemePage.css';

import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

import ThemeHeader from './ThemeHeader';

interface Item {
  id: number;
  name: string;
  image: string;
  price: string;
}

const items: Item[] = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: 'BBQ 양념치킨+크림치즈볼+콜라 1.25L',
  image: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
  price: '29000원'
}));

const ThemePage: React.FC = () => {
    const { themeKey } = useParams<{ themeKey?: string }>();
  
    if (!themeKey) {
      return <Navigate to="/" replace />;
    }
  
    return (
      <div className="container">
        <ThemeHeader themeKey={themeKey} />
        <div className="items-container">
          {items.map((item, index) => (
            <div key={index} className="item-card">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-info">
                <p className="item-store">BBQ</p>
                <h3 className="item-title">{item.name}</h3>
                <p className="item-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ThemePage;