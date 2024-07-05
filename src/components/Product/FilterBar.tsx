import styled from '@emotion/styled';

export interface FilterBarProps {
  filter: string;
  setFilter: (filter: string) => void;
  detail: string;
  setDetail: (detail: string) => void;
}

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center;
  width: 100%; /* 전체 너비를 차지하도록 설정 */
`;

export const FilterButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  font: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 16px;
  font-size: 14px;
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
  border: 0;
  cursor: pointer;
  padding: 13px 20px;
  font-size: 16px;
  line-height: 16px;
  color: rgba(70, 132, 233, 0.7);
  font-weight: 400;
  transition:
    color 200ms ease,
    font-weight 200ms ease;
  background-color: rgba(70, 132, 233, 0.3);
  outline: none;

  &.active {
    color: rgb(70, 132, 233);
  }
`;

export const Child = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* 가로 가운데 정렬 */
  margin: 20px 0;
  gap: 10px;
  width: 100%; /* 전체 너비를 차지하도록 설정 */
`;

export const Child2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* 가로 가운데 정렬 */
  margin: 20px 0;
  width: 100%; /* 전체 너비를 차지하도록 설정 */
`;

const Child3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: lightgray;
  gap: 5px;
  &.active {
    color: rgb(70, 132, 233);
  }
`;

const iconfunc = (who: string) => {
  switch (who) {
    case '여성이':
      return '👩';
    case '남성이':
      return '👱‍♂️';
    case '청소년이':
      return '👦🏻';
    default:
      return 'ALL'; // default to male image if no match is found
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
          <Child3 className={filter === f ? 'active' : ''}>
            <FilterButton
              key={f}
              className={filter === f ? 'active' : ''}
              onClick={() => setFilter(f)}
            >
              {iconfunc(f)}
            </FilterButton>
            <p>{f}</p>
          </Child3>
        ))}
      </Child>
      <Child2>
        {details.map((d) => (
          <FilterButton2
            key={d}
            className={detail === d ? 'active' : ''}
            onClick={() => setDetail(d)}
          >
            {d}
          </FilterButton2>
        ))}
      </Child2>
    </FilterWrapper>
  );
};

export default FilterBar;