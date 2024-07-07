// import '@/components/main/main.css';

import { GiftRanking } from './GiftRanking/GiftRanking';
import { SelectAI } from './SelectAI';
import { SelectFriend } from './SelectFriend';
import { SelectTheme } from './SelectTheme/SelectTheme';

export const Main = () => {
  return (
    <div>
      <SelectFriend />
      <SelectTheme />
      <SelectAI />
      <GiftRanking />
    </div>
  );
};
