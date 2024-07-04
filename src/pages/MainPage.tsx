import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/common/Button/index';
import styled from '@emotion/styled';
import { Grid } from '@/components/common/layouts/Grid';
import { Image } from '@/components/common/Image';
import FilterBar from '@/components/Product/FilterBar';
import ProductList from '@/components/Product/ProductList';
import InitialProducts from '@/components/Product/InitialProducts';

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 가운데 정렬 */
  height: 100%;
  justify-content: center;
  width: 100%; /* 부모 요소의 너비를 따릅니다 */
  box-sizing: border-box;
  padding: 0 20px; /* 패딩을 추가하여 좌우 여백을 설정 */
  overflow-x: hidden; /* 좌우 스크롤 숨기기 */
  flex: 1;
`;

export const Child = styled.div`
  max-width: 100%; /* 최대 너비를 설정하여 큰 화면에서도 중앙에 정렬 */
  margin: 20px 0; /* 상하 마진을 설정 */
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  box-sizing: border-box;
  padding: 20px; /* 내부 패딩 추가 */
  // background-color: yellow;
`;

export const ChildColumnCenter = styled(Child)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 70%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  // background-color: black;
  padding: 10px;
`;

const BarWrapper = styled.div`
  width: 100%;
  max-width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(254, 235, 0);
  padding: 16px;
  border-radius: 8px;

  @media (max-width: 600px) {
    align-items: flex-start;
  }
`;

const themes = [
  { key: 'birthday', name: '생일' },
  { key: 'graduation', name: '졸업 선물' },
  { key: 'small-luxury', name: '스몰 럭셔리' },
  { key: 'luxury', name: '명품 선물' },
  { key: 'marry', name: '결혼/집들이' },
  { key: 'heart', name: '따뜻한 선물' },
  { key: 'light', name: '가벼운 선물' },
  { key: 'fan', name: '팬심 저격' },
  { key: 'gifticon', name: '교환권' },
  { key: 'health', name: '건강/비타민' },
  { key: 'food', name: '과일/한우' },
  { key: 'kids', name: '출산/키즈' },
];

const MainPage = () => {
  const navigate = useNavigate();

  const [filter, setFilter] = useState('전체');
  const [detail, setDetail] = useState('받고 싶어한');
  const [showMore, setShowMore] = useState(false);

  const filteredProducts =
    filter === '전체'
      ? InitialProducts
      : InitialProducts.filter((product) => product.category === filter);

  const detailedProducts = filteredProducts.filter((product) => product.detail === detail);

  const displayedProducts = showMore ? detailedProducts : detailedProducts.slice(0, 6);

  // 이렇게 상태에 대한 변수가 존재해야 상태 변화에 대한 다른 UI를 보일 수 있다.

  const handleLink = (path: string) => {
    navigate(path);
  };

  return (
    <BodyWrapper>
      <Child>
        <Image
          src="/images/choonsik.png"
          radius={30}
          ratio="square"
          width={80}
          height={80}
          onClick={() => {
            alert('선물 받을 친구를 선택해주세요');
          }}
          style={{ cursor: 'pointer' }}
        ></Image>
        <h2 style={{ fontWeight: 500 }}>선물 받을 친구를 선택해주세요</h2>
      </Child>
      <ChildColumnCenter>
        <Grid columns={{ sm: 2, md: 4, lg: 6 }} gap={20}>
          {themes.map((theme) => (
            <ItemWrapper key={theme.key} onClick={() => handleLink(`/theme/${theme.key}`)}>
              <Image src="/images/cake.jpeg" radius={40} ratio="square"></Image>
              <p>{theme.name}</p>
            </ItemWrapper>
          ))}
        </Grid>
      </ChildColumnCenter>
      <BarWrapper>
        <p style={{ color: 'rgba(0, 0, 0, 0.4)' }}>AI가 추천해주는 선물</p>
        <h3 style={{ fontWeight: 700 }}>선물을 추천받고 싶은 친구를 선택해주세요</h3>
      </BarWrapper>
      <Child>
        <FilterBar filter={filter} setFilter={setFilter} detail={detail} setDetail={setDetail} />
      </Child>
      <ChildColumnCenter>
        <ProductList products={displayedProducts} />
        {detailedProducts.length > 6 && ( // 이렇게 하면 length가 6초과여야 버튼이 보이게 된다.
          <Button onClick={() => setShowMore(!showMore)} theme="lightGray">
            {showMore ? '접기' : '더보기'}
          </Button>
        )}
      </ChildColumnCenter>
    </BodyWrapper>
  );
};

export default MainPage;
