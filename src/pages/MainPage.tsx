import { useState } from 'react';
import { Button } from '@/components/common/Button/index';
import styled from '@emotion/styled';
import { Image } from '@/components/common/Image';
import FilterBar from '@/components/Product/FilterBar';
import ProductList from '@/components/Product/ProductList';
import InitialProducts from '@/components/Product/InitialProducts';
import Gift from '@/components/Gift/Gift';
import { breakpoints } from '@/styles/variants/index';

const MainPage = () => {
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
        <Gift></Gift>
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
        {detailedProducts.length > 6 && (
          <Button onClick={() => setShowMore(!showMore)} theme="lightGray">
            {showMore ? '접기' : '더보기'}
          </Button>
        )}
      </ChildColumnCenter>
    </BodyWrapper>
  );
};

export default MainPage;

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
  @media (max-width: 768px) {
    padding: 0 10px; /* 작은 화면에서는 좌우 패딩을 줄입니다 */
  }
`;

export const Child = styled.div`
  max-width: 100%;
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  box-sizing: border-box;
  padding: 20px;
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
  width: auto;
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
  @media (max-width: ${breakpoints.sm}) {
    align-items: flex-start;
  }
`;
