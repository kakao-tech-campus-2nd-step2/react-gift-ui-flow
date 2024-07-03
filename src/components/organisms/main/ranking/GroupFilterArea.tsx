import styled from '@emotion/styled';
import Container from '@components/atoms/container/Container';
import { GroupFilter } from '@/types';

interface GroupFilterProps {
  currentFilter: string;
  setGroupFilter: (filter: GroupFilter) => void;
}

const FilterButton = styled.button<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? '#a8c8ff' : '#e6f0ff')};
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
`;

function GroupFilterArea({ currentFilter, setGroupFilter }: GroupFilterProps) {
  const filterNames: {
    [key in GroupFilter]: string;
  } = {
    all: '전체',
    men: '남성이',
    women: '여성이',
    adolescent: '청소년이',
  };

  return (
    <Container
      justifyContent="space-around"
      cssProps={{
        gap: '10px',
      }}
      padding="20px 0 7px"
    >
      {(Object.keys(filterNames) as GroupFilter[]).map((filter) => {
        const key = `groupFilter-${filter}`;
        const filterName = filterNames[filter];

        return (
          <FilterButton
            key={key}
            selected={currentFilter === filter}
            onClick={() => setGroupFilter(filter)}
          >
            {filterName}
          </FilterButton>
        );
      })}
    </Container>
  );
}

export default GroupFilterArea;
