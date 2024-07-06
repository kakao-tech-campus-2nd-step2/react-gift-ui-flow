import SelectAI from './components/select-AI';
import SelectFriend from './components/select-friends';
import SelectGiftType from './components/select-gift-type';
import UpSurgeRank from './components/up-surge-rank';
import * as S from './styles';

const MainPage = () => {
  return (
    <>
      <SelectFriend />
      <SelectGiftType />
      <SelectAI />
      <S.SelectSpacer />

      <UpSurgeRank />
    </>
  );
};

export default MainPage;
