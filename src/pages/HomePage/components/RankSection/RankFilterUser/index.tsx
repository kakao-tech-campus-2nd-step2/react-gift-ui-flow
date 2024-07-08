import { Dispatch, SetStateAction } from 'react';

import { UserContents } from '@/pages/HomePage/data/filterButton';
import { UserFilterType } from '@/types/rankTypes';

import { Container } from '@/components/ui/Layout/Container';

import { ActiveUserButton } from './ActiveUserButton';

type RankFilterUserProps = {
  userFilter: UserFilterType;
  setUserFilter: Dispatch<SetStateAction<UserFilterType>>;
};

export const RankFilterUser = ({
  userFilter,
  setUserFilter,
}: RankFilterUserProps) => {
  return (
    <Container justifyContent="space-around">
      {UserContents.map((filter) => {
        return (
          <ActiveUserButton
            key={filter.index}
            user={filter}
            isActive={filter.value === userFilter}
            onClick={() => setUserFilter(filter.value)}
          />
        );
      })}
    </Container>
  );
};
