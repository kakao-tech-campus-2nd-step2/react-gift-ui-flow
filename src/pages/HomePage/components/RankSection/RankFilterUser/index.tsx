import { UserContents } from '@/pages/HomePage/data/filterButton';

import { Container } from '@/components/ui/Layout/Container';

import { ActiveUserButton } from './ActiveUserButton';

export const RankFilterUser = () => {
  return (
    <Container justifyContent="space-around">
      {UserContents.map((filter) => (
        <ActiveUserButton key={filter.index} user={filter} />
      ))}
    </Container>
  );
};
