import styled from '@emotion/styled';
import { useState } from 'react';

import { RankingFilter } from './RankingFilter';
import { RankingList } from './RankingList';

import { Container } from '@/components/common/Layout/Container';
import { goodsItems } from '@/constant/GoodsItems';

export interface IFilter {
  selectTarget: string;
  setSelectTarget: React.Dispatch<React.SetStateAction<string>>;
  selectType: string;
  setSelectType: React.Dispatch<React.SetStateAction<string>>;
}

export const GiftRanking = () => {
  const [selectTarget, setSelectTarget] = useState<string>('전체');
  const [selectType, setSelectType] = useState<string>('받고 싶어한');
  const Items =
    selectTarget === '전체'
      ? goodsItems.filter((goods) => goods.filterType === selectType)
      : goodsItems.filter((goods) => goods.filterTarget === selectTarget && goods.filterType === selectType);
  return (
    <RankingWrapper>
      <Container flexDirection="column" justifyContent="center" alignItems="center" maxWidth="1024px">
        <Title>실시간 급상승 선물랭킹</Title>
        <RankingFilter
          selectTarget={selectTarget}
          setSelectTarget={setSelectTarget}
          selectType={selectType}
          setSelectType={setSelectType}
        />
        <RankingList goodsItems={Items} />
      </Container>
    </RankingWrapper>
  );
};

const RankingWrapper = styled.div`
  width: 100%;
  padding: 40px 20px;
`;
const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
`;
