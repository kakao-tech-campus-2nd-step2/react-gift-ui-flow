import React, { useState } from 'react';

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

const loadMoreButtonStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px 20px',
  margin: '20px auto',
  borderRadius: '5px',
  cursor: 'pointer',
  backgroundColor: '#fff',
  color: '#000',
  border: '1px solid #ddd',
  width: '480px',
};

const ProductList: React.FC = () => {
  const [visibleProducts, setVisibleProducts] = useState(6);
  const showMoreProducts = () => {
    setVisibleProducts((prev) => prev + 6);
  };
  const showLessProducts = () => {
    setVisibleProducts(6);
  };

  return (
    <div>
      <div style={containerStyle}>
        {products.slice(0, visibleProducts).map((product) => (
          <div key={product.id} style={productCardStyle}>
            <img src={product.image} alt={product.name} style={productImageStyle} />
            <div style={productInfoStyle}>
              <div style={productNameStyle}>{product.name}</div>
              <div style={productPriceStyle}>{product.price}원</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {visibleProducts < products.length ? (
          <button onClick={showMoreProducts} style={loadMoreButtonStyle}>
            더보기
          </button>
        ) : (
          <button onClick={showLessProducts} style={loadMoreButtonStyle}>
            접기
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductList;
