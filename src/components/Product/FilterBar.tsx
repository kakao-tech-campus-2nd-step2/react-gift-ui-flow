import styled from '@emotion/styled';

export interface FilterBarProps {
  filter: string;
  setFilter: (filter: string) => void;
  detail: string;
  setDetail: (detail: string) => void;
}

const iconfunc = (who: string) => {
  switch (who) {
    case '여성이':
      return '👩';
    case '남성이':
      return '👱‍♂️';
    case '청소년이':
      return '👦🏻';
    default:
      return 'ALL';
  }
};

const FilterBar = ({ filter, setFilter, detail, setDetail }: FilterBarProps) => {
  const filters = ['전체', '여성이', '남성이', '청소년이'];
  const details = ['받고 싶어한', '많이 선물한', '위시로 받은'];
  return (
    <FilterWrapper>
      <h1 style={{ fontWeight: 700 }}>실시간 급상승 선물랭킹</h1>
      <Child>
        {filters.map((f) => (
          <SquareButtonWrapper className={filter === f ? 'active' : ''}>
            <FilterButton
              key={f}
              className={filter === f ? 'active' : ''}
              onClick={() => setFilter(f)}
            >
              {iconfunc(f)}
            </FilterButton>
            <p>{f}</p>
          </SquareButtonWrapper>
        ))}
      </Child>
      <ButtonBar>
        {details.map((d) => (
          <FilterButton2
            key={d}
            className={detail === d ? 'active' : ''}
            onClick={() => setDetail(d)}
          >
            {d}
          </FilterButton2>
        ))}
      </ButtonBar>
    </FilterWrapper>
  );
};

export default FilterBar;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center;
  width: 100%; /* 전체 너비를 차지하도록 설정 */
`;

export const FilterButton = styled.button`
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 700;
  transition: background-color 200ms ease;
  background-color: rgb(230, 241, 255);
  outline: none;
  color: white !important;
  &.active {
    background-color: rgb(70, 132, 233);
  }
`;

export const FilterButton2 = styled.button`
  background: none;
  cursor: pointer;
  padding: 13px 20px;
  font-size: 18px;
  line-height: 16px;
  color: rgba(70, 132, 233, 0.7);
  font-weight: 400;
  transition:
    color 200ms ease,
    font-weight 200ms ease;
  outline: none;
  &.active {
    color: rgb(70, 132, 233);
  }
`;

export const Child = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  gap: 10px;
  width: 100%;
`;

export const ButtonBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  width: 100%;
  background-color: rgb(230, 241, 255);
  border: 1px solid rgba(70, 132, 233, 0.1);
  border-radius: 12px;
`;

const SquareButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: lightgray;
  gap: 5px;
  &.active {
    color: rgb(70, 132, 233);
  }
  flex-grow: 1;
`;
