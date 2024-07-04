import styled from '@emotion/styled';

import type { IFilter } from './GiftRanking';
import type { IItem } from './Item';

export const FilterDetailList = ({ selectType, setSelectType }: Pick<IFilter, 'selectType' | 'setSelectType'>) => {
  return (
    <DetailList>
      <DetailText selectType={selectType} text="받고 싶어한" onClick={() => setSelectType('받고 싶어한')}>
        받고 싶어한
      </DetailText>
      <DetailText selectType={selectType} text="많이 선물한" onClick={() => setSelectType('많이 선물한')}>
        많이 선물한
      </DetailText>
      <DetailText selectType={selectType} text="위시로 받은" onClick={() => setSelectType('위시로 받은')}>
        위시로 받은
      </DetailText>
    </DetailList>
  );
};
const DetailList = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;

  background-color: rgb(230, 241, 255);
  border-radius: 10px;
  border: 1px solid rgba(70, 132, 233, 0.1);
`;
const DetailText = styled.div<Pick<IItem, 'selectType' | 'text'>>`
  font-size: 22px;
  padding: 20px 30px;
  font-weight: ${(props) => (props.selectType === props.text ? 'bold' : '400')};
  color: ${(props) => (props.selectType === props.text ? '#4684E9' : 'rgba(70, 132, 233, 0.7)')};
  cursor: pointer;
`;
