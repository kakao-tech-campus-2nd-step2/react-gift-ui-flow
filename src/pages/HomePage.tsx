import React, { useState } from 'react';
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

const products = [
  {
    id: 1,
    name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    price: 29000,
    image:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
  },
  {
    id: 2,
    name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    price: 29000,
    image:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
  },
  {
    id: 3,
    name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    price: 29000,
    image:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
  },
  {
    id: 4,
    name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    price: 29000,
    image:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
  },
  {
    id: 5,
    name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    price: 29000,
    image:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
  },
  {
    id: 6,
    name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    price: 29000,
    image:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
  },
  {
    id: 7,
    name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    price: 29000,
    image:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
  },
  {
    id: 8,
    name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    price: 29000,
    image:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
  },
  {
    id: 9,
    name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    price: 29000,
    image:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
  },
  {
    id: 10,
    name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    price: 29000,
    image:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
  },
];

const containerStyle: React.CSSProperties = {
  padding: '20px',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  justifyContent: 'center',
};

const rowStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  width: '100%',
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

const trendingSectionStyle: React.CSSProperties = {
  textAlign: 'center',
  marginTop: '50px',
};

const filterButtonStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '60px',
  height: '60px',
  margin: '20px 60px',
  borderRadius: '20px',
  cursor: 'pointer',
  backgroundColor: '#E6F1FF',
  color: '#fff',
  fontWeight: 'bold',
  border: 'none',
};

const activeFilterButtonStyle: React.CSSProperties = {
  ...filterButtonStyle,
  backgroundColor: '#007bff',
  color: '#fff',
};
const newFilterButtonStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px 20px',
  margin: '10px',
  borderRadius: '10px',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  color: '#4684E9B3',
  fontWeight: 'bold',
  borderBottom: 'none',
  fontSize: '16px',
};

const activeNewFilterButtonStyle: React.CSSProperties = {
  ...newFilterButtonStyle,
  color: '#007bff',
};

const filterContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#4684E91A',
  padding: '20px',
  borderRadius: '10px',
  width: '100%',
  height: '16px',
  margin: '0 40px',
};

const productCardStyle: React.CSSProperties = {
  border: 'none',
  overflow: 'hidden',
  textAlign: 'center',
  width: '200px',
};

const productImageStyle: React.CSSProperties = {
  width: '100%',
  borderRadius: '10px',
  height: 'auto',
};

const productInfoStyle: React.CSSProperties = {
  padding: '10px',
};

const productNameStyle: React.CSSProperties = {
  fontSize: '14px',
  fontWeight: 'bold',
};

const productPriceStyle: React.CSSProperties = {
  fontSize: '16px',
  color: '#000',
  marginTop: '5px',
};

const ProductList: React.FC = () => {
  return (
    <div style={containerStyle}>
      {products.map((product) => (
        <div key={product.id} style={productCardStyle}>
          <img src={product.image} alt={product.name} style={productImageStyle} />
          <div style={productInfoStyle}>
            <div style={productNameStyle}>{product.name}</div>
            <div style={productPriceStyle}>{product.price}원</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const HomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [newActiveFilter, setNewActiveFilter] = useState<string | null>(null);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };
  const handleNewFilterCilck = (filter: string) => {
    setNewActiveFilter(filter);
  };

  return (
    <div>
      <section>
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
        <div style={rowStyle}>
          {categories.slice(6).map((category) => (
            <div key={category.key} style={categoryCardStyle}>
              <Link to={`/theme/${category.key}`}>
                <img src={category.image} alt={category.name} style={categoryImageStyle} />
                <div style={categoryTitleStyle}>{category.name}</div>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div style={trendingSectionStyle}>
          <h2 style={{ fontWeight: 'bold' }}>실시간 급상승 선물랭킹</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <div>
              <button
                style={activeFilter === 'all' ? activeFilterButtonStyle : filterButtonStyle}
                onClick={() => handleFilterClick('all')}
              >
                ALL
              </button>
              <div>전체</div>
            </div>

            <div>
              <button
                style={activeFilter === 'woman' ? activeFilterButtonStyle : filterButtonStyle}
                onClick={() => handleFilterClick('woman')}
              >
                👩🏻‍🦳
              </button>
              <div>여성이</div>
            </div>

            <div>
              <button
                style={activeFilter === 'man' ? activeFilterButtonStyle : filterButtonStyle}
                onClick={() => handleFilterClick('man')}
              >
                👩🏻‍🦳
              </button>
              <div>남성이</div>
            </div>

            <div>
              <button
                style={activeFilter === 'teen' ? activeFilterButtonStyle : filterButtonStyle}
                onClick={() => handleFilterClick('teen')}
              >
                👦🏻
              </button>
              <div>청소년이</div>
            </div>
          </div>
        </div>
        <div style={trendingSectionStyle}>
          <div
            style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}
          >
            <div style={filterContainerStyle}>
              <button
                style={
                  newActiveFilter === 'filter1' ? activeNewFilterButtonStyle : newFilterButtonStyle
                }
                onClick={() => handleNewFilterCilck('filter1')}
              >
                받고 싶어한
              </button>
              <button
                style={
                  newActiveFilter === 'filter2' ? activeNewFilterButtonStyle : newFilterButtonStyle
                }
                onClick={() => handleNewFilterCilck('filter2')}
              >
                많이 선물한
              </button>
              <button
                style={
                  newActiveFilter === 'filter3' ? activeNewFilterButtonStyle : newFilterButtonStyle
                }
                onClick={() => handleNewFilterCilck('filter3')}
              >
                위시로 받은
              </button>
            </div>
          </div>
        </div>
        <div>
          <ProductList />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
