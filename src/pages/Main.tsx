/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

import { Button } from '@/components/common/Button';
import { Image } from '@/components/common/Image';
import { themes } from '@/styles/themes';

const Section = styled.section`
  height: 100px;
  padding: 40px 16px;
  background: #fafafa;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const InnerDiv = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const GridDiv = styled.div`
  width: 100%;
  display: grid;
  gap: 0px;
  grid-template-columns: repeat(6, 1fr);
  a {
    text-decoration: none;
    outline: none;
  }
`;

const titleStyle = css`
  padding-left: 16px;
  font-size: 28px;
  line-height: 35px;
  font-weight: 500;
`;

// Theme 카테고리 섹션
const labelStyle = css`
  padding-top: 7px;
  line-height: 17px;
  color: #000;
`;

// 실시간 급상승 선물랭킹
const products = [
  {
    id: 1,
    category: '전체',
    subCategory: '받고 싶어한',
    name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    price: '29000원',
    imgSrc: 'https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png',
  },
  // 나머지 상품 데이터 추가
];

const filters = {
  category: ['전체', '여성이', '남성이', '청소년이'],
  subCategory: ['받고 싶어한', '많이 선물한', '위시로 받은'],
};

const FilterButton = styled.button`
  padding: 8px 16px;
  margin: 0 4px;
  background: #eee;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &.active {
    background: #007bff;
    color: white;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const ProductCard = styled.div`
  width: calc(33.333% - 16px);
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Main() {
  const [category, setCategory] = useState('전체');
  const [subCategory, setSubCategory] = useState('받고 싶어한');
  const [visibleProducts, setVisibleProducts] = useState(6);

  const filteredProducts = products.filter(
    (product) =>
      (category === '전체' || product.category === category) && product.subCategory === subCategory,
  );

  return (
    <div className="main">
      <Section>
        <Wrapper>
          <InnerDiv>
            <Image
              src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png"
              width="70px"
              ratio="square"
              radius={24}
              alt="친구 선택 유도 아이콘"
            />
            <p css={titleStyle}>선물 받을 친구를 선택해주세요.</p>
          </InnerDiv>
        </Wrapper>
      </Section>

      <section style={{ padding: '45px 52px 23px' }}>
        <Wrapper>
          <InnerDiv>
            <GridDiv>
              {Object.keys(themes).map((key) => (
                <a href={`/theme/${key}`}>
                  <Wrapper style={{ flexDirection: 'column', padding: '20px' }}>
                    <Image
                      width="90px"
                      ratio="square"
                      radius={32}
                      src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                      alt={key}
                    />
                    <p css={labelStyle}>{themes[key as keyof typeof themes].label}</p>
                  </Wrapper>
                </a>
              ))}
            </GridDiv>
          </InnerDiv>
        </Wrapper>
      </section>

      <section style={{ padding: '16px' }}>
        <Wrapper>
          <InnerDiv>
            <Button theme="kakao" size="large">
              <h4>선물을 추천받고 싶은 친구를 선택해주세요.</h4>
            </Button>
          </InnerDiv>
        </Wrapper>
      </section>

      <section>
        {' '}
        <div>
          <h1>실시간 급상승 선물랭킹</h1>
          <div>
            {filters.category.map((cat) => (
              <FilterButton
                key={cat}
                className={cat === category ? 'active' : ''}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </FilterButton>
            ))}
          </div>
          <div>
            {filters.subCategory.map((subCat) => (
              <FilterButton
                key={subCat}
                className={subCat === subCategory ? 'active' : ''}
                onClick={() => setSubCategory(subCat)}
              >
                {subCat}
              </FilterButton>
            ))}
          </div>
          <ProductContainer>
            {filteredProducts.slice(0, visibleProducts).map((product) => (
              <ProductCard key={product.id}>
                <Image
                  src={product.imgSrc}
                  alt={product.name}
                  width="100px"
                  ratio="square"
                  radius={24}
                />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </ProductCard>
            ))}
          </ProductContainer>
          {visibleProducts < filteredProducts.length ? (
            <Button onClick={() => setVisibleProducts(visibleProducts + 6)}>더보기</Button>
          ) : (
            visibleProducts > 6 && <Button onClick={() => setVisibleProducts(6)}>접기</Button>
          )}
        </div>
      </section>
    </div>
  );
}
export default Main;
