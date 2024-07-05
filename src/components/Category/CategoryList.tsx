import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    key: 'birthday',
    name: '생일',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
  },
  {
    key: 'graduation',
    name: '졸업선물',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
  },
  {
    key: 'luxury',
    name: '스몰럭셔리',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
  },
  {
    key: 'brand',
    name: '명품선물',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
  },
  {
    key: 'wedding',
    name: '결혼/집들이',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
  },
  {
    key: 'warm',
    name: '따뜻한선물',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
  },
  {
    key: 'light',
    name: '가벼운선물',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
  },
  {
    key: 'emergency',
    name: '팬심저격',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
  },
  {
    key: 'exchange',
    name: '교환권',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
  },
  {
    key: 'health',
    name: '건강/비타민',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
  },
  {
    key: 'fruit',
    name: '과일/한우',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
  },
  {
    key: 'kids',
    name: '출산/키즈',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
  },
];

const containerStyle: React.CSSProperties = {
  padding: '20px',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  justifyContent: 'center',
};

const categoryCardStyle: React.CSSProperties = {
  width: '100px',
  textAlign: 'center',
};

const categoryImageStyle: React.CSSProperties = {
  width: '100%',
  height: '100px',
  objectFit: 'cover',
  borderRadius: '35px',
};

const categoryTitleStyle: React.CSSProperties = {
  marginTop: '10px',
  fontSize: '14px',
};

const CategoryList: React.FC = () => {
  return (
    <div style={containerStyle}>
      {categories.slice(0, 6).map((category) => (
        <div key={category.key} style={categoryCardStyle}>
          <Link to={`/theme/${category.key}`}>
            <img src={category.image} alt={category.name} style={categoryImageStyle} />
            <div style={categoryTitleStyle}>{category.name}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
