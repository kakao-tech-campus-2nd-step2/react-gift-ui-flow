import styled from '@emotion/styled';

import InnerStyle from '@/styles/innerStyle';

import RankingItem from '../home/section4/rankingitemlist/RankingItem';

const Inner = styled(InnerStyle)`
  width: 100%;
  display: flex;
  padding: 40px 16px 360px;
`;

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(4, 1fr);
`;

const ItemIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

const ThemeGrid = () => {
  return (
    <Inner>
      <GridContainer>
        {ItemIndex.map((index) => (
          <RankingItem key={index} index={index} showSpan={false} />
        ))}
      </GridContainer>
    </Inner>
  );
};

export default ThemeGrid;
