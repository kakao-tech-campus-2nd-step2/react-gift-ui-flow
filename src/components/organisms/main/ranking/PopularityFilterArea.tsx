import styled from '@emotion/styled';
import Container from '@components/atoms/container/Container';
import { PopularityFilter } from '@/types';

interface PopularityFilterProps {
  currentFilter: string;
  setPopularityFilter: (filter: PopularityFilter) => void;
}

const FilterButton = styled.div<{ selected: boolean }>`
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
  border: none;
  border-radius: 10px;
  padding: 20px 30px;
  font-size: 22px;
  line-height: 22px;
  cursor: pointer;
  color: ${({ selected }) => (selected ? 'rgb(70, 132, 233)' : 'rgba(70, 132, 233, 0.7)')};
  transition: color 200ms ease 0s, font-weight 200ms ease 0s
`;

function PopularityFilterArea({ currentFilter, setPopularityFilter }: PopularityFilterProps) {
  const filterNames: { [key in PopularityFilter]: string } = {
    mostWanted: '받고 싶어한',
    mostGiven: '많이 선물한',
    mostGivenByWish: '위시로 받은',
  };

  return (
    <Container
      justifyContent="center"
      cssProps={{
        marginTop: '16px',
      }}
      backgroundColor="rgb(230, 241, 255)"
    >
      {(Object.keys(filterNames) as PopularityFilter[]).map((filter) => {
        const key = `popularityFilter-${filter}`;
        const filterName = filterNames[filter];

        return (
          <FilterButton
            key={key}
            selected={currentFilter === filter}
            onClick={() => setPopularityFilter(filter)}
          >
            {filterName}
          </FilterButton>
        );
      })}
    </Container>
  );
}

export default PopularityFilterArea;
