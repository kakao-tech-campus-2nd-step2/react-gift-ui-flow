import styled from '@emotion/styled';

import type { IFilter } from '.';
import { Item } from './Item';

export const FilterList = ({ selectTarget, setSelectTarget }: Pick<IFilter, 'selectTarget' | 'setSelectTarget'>) => {
  return (
    <List>
      <Item icon="ALL" text="전체" onClick={() => setSelectTarget('전체')} selectTarget={selectTarget} />
      <Item icon="👩🏻" text="여성이" onClick={() => setSelectTarget('여성이')} selectTarget={selectTarget} />
      <Item icon="👨🏻" text="남성이" onClick={() => setSelectTarget('남성이')} selectTarget={selectTarget} />
      <Item icon="👦🏻" text="청소년이" onClick={() => setSelectTarget('청소년이')} selectTarget={selectTarget} />
    </List>
  );
};
const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 40px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;
