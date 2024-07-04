import * as styles from './styles';
import SelectAI from './components/SelectAI';
import SelectFriend from './components/SelectFriend';
import SelectGiftType from './components/SelectGiftType';
import UpSurgeRank from './components/UpSurgeRank';

const MainPage = () => {
  return (
    <div>
      <SelectFriend />
      <SelectGiftType />
      <SelectAI />
      <styles.SelectSpacer></styles.SelectSpacer>

      <UpSurgeRank />
    </div>
  );
};

export default MainPage;
