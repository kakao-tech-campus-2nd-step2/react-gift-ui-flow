import { UserFilterButtons } from '@/data/filterData';

import { Container } from '@/components/ui/Layout/Container';

import { ActiveUserButton } from './ActiveUserButton';

export const RankFilterUser = () => {
  return (
    <Container justifyContent="space-around">
      {UserFilterButtons.map((filter) => (
        <ActiveUserButton key={filter.index} user={filter} />
      ))}
    </Container>
  );
};
