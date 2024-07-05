/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

import { Button } from '@/components/common/Button';
import { RankingGoodsItems } from '@/components/common/GoodsItem/Ranking';
import { Image } from '@/components/common/Image';
import { Container } from '@/components/common/layouts/Container';
import { Grid } from '@/components/common/layouts/Grid';
import { themes } from '@/styles/themes';

const Section = styled.section`
  height: 100px;
  padding: 40px 16px;
  background: #fafafa;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 35px 24px;
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
  font-size: 16px;
  line-height: 28px;
`;

// 실시간 급상승 선물랭킹
const filters = {
  category: ['전체', '여성이', '남성이', '청소년이'],
  subCategory: ['받고 싶어한', '많이 선물한', '위시로 받은'],
};

const FilterButton = styled.button`
  padding: 8px 16px;
  border-radius: 24px;
  font-weight: 700;
  background-color: #e6f1ff;
  color: #666;
  transition: background-color 200ms ease 0s;
  outline: none;
  &.active {
    background: #4684e9;
    color: white;
  }
`;

function Main() {
  const [category, setCategory] = useState('전체');
  const [subCategory, setSubCategory] = useState('받고 싶어한');
  const [visibleItems, setVisibleItems] = useState(6);

  return (
    <div className="main">
      <Section>
        <Container justifyContent="flex-start" alignItems="center">
          <Image
            src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png"
            width="70px"
            ratio="square"
            radius={24}
            alt="춘식이"
          />
          <p css={titleStyle}>선물 받을 친구를 선택해주세요.</p>
        </Container>
      </Section>

      <section style={{ padding: '45px 52px 23px' }}>
        <Container>
          <Grid gap={0} columns={6}>
            {Object.keys(themes).map((key) => (
              <a
                href={`/theme/${key}`}
                style={{ textDecoration: 'none', outline: 'none', color: '#000' }}
              >
                <ItemContainer>
                  <Image
                    width="90px"
                    ratio="square"
                    radius={32}
                    src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                    alt={key}
                  />
                  <p css={labelStyle}>{themes[key as keyof typeof themes].label}</p>
                </ItemContainer>
              </a>
            ))}
          </Grid>
        </Container>
      </section>

      <section>
        <Container>
          <Button theme="kakao" size="large">
            <h4>선물을 추천받고 싶은 친구를 선택해주세요.</h4>
          </Button>
        </Container>
      </section>

      <section style={{ padding: '100px 0' }}>
        <Container flexDirection="column" alignItems="center">
          <h2 style={{ fontSize: '35px' }}>실시간 급상승 선물랭킹</h2>
          <div style={{ padding: '15px 0' }}>
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

          <div style={{ padding: '40px 0px 60px' }}>
            <Grid gap={16} columns={6}>
              {Array.from({ length: visibleItems }, (_, index) => (
                <RankingGoodsItems
                  key={index}
                  rankingIndex={index + 1}
                  imageSrc="https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg"
                  subtitle="BBQ "
                  title="BBQ 양념치킨+크림치즈볼+콜라1.25L"
                  amount={29000}
                />
              ))}
            </Grid>
          </div>
          {visibleItems < 21 ? (
            <Button theme="outline" onClick={() => setVisibleItems(21)}>
              더보기
            </Button>
          ) : (
            <Button theme="outline" onClick={() => setVisibleItems(6)}>
              접기
            </Button>
          )}
        </Container>
      </section>
    </div>
  );
}
export default Main;
