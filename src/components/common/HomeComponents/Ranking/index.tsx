import styled from '@emotion/styled';

import Filter from '@/components/common/HomeComponents/Ranking/Filter';
import ItemList from '@/components/common/HomeComponents/Ranking/ItemList';



export const Ranking = () =>{
  return(
    <Wrapper>
      <Title>
      실시간 급상승 선물랭킹
      </Title>
      <Filter></Filter>
      <ItemList></ItemList>
    </Wrapper>
  );
}
export default Ranking;

const Wrapper = styled.div`
  width: 100%;
`;
const Title = styled.h2`
  width: 100%;
  font-size: 24px;
  text-align: center;`