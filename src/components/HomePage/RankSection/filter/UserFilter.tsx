import { useFilter } from '@/context/filter/useFilter';
import { UserFilterButtons } from '@/data/filterData';
import { UserFilterContentType } from '@/types/rankTypes';

import { Container } from '@/components/ui/Layout/Container';

import { ActiveUserButton } from './ActiveUserButton';

export const UserFilter = () => {
  const { userFilter, setUserFilter } = useFilter();
  const userFilters: UserFilterContentType[] = UserFilterButtons;

  return (
    <Container justifyContent="space-around">
      {userFilters.map((user) => (
        <ActiveUserButton
          key={user.value}
          user={user}
          isActive={user.value === userFilter}
          onClick={() => setUserFilter(user.value)}
        />
      ))}
    </Container>
  );
};
