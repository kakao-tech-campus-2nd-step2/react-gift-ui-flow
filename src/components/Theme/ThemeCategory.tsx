import React from 'react';
import { Link } from 'react-router-dom';

const themes = [
  { key: 'birthday', name: '생일선물' },
  { key: 'graduation', name: '졸업선물' },
  { key: 'small-luxury', name: '스몰럭셔리' },
  { key: 'luxury', name: '명품선물' },
  { key: 'wedding-housewarming', name: '결혼/집들이' },
  { key: 'warm-gifts', name: '따뜻한선물' },
  { key: 'light-gifts', name: '가벼운선물' },
  { key: 'fan-gifts', name: '팬심저격' },
  { key: 'gift-certificates', name: '교환권' },
  { key: 'health-vitamins', name: '건강/비타민' },
  { key: 'fruits-beef', name: '과일/한우' },
  { key: 'birth-kids', name: '출산/키즈' },
];

const ThemeCategory: React.FC = () => {
  return (
    <div className="theme-category">
      <ul>
        {themes.map((theme) => (
          <li key={theme.key}>
            <Link to={`/theme/${theme.key}`}>{theme.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeCategory;
