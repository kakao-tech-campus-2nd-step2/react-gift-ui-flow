import { Container } from '@/components/common/layouts/Container';
import * as S from './styles';
import * as G from '@/styles/GlobalStyles';
import SelectImg from '@/assets/main/Friends_Icon.png';

const SelectFriend = () => {
  return (
    <S.SelectFriendsLayout>
      <Container>
        <G.InnerContainer justifyContent="flex-start">
          <S.FriendImg src={SelectImg} alt="친구 선택 유도 아이콘" />
          <S.Text>선물 받을 친구를 선택해주세요.</S.Text>
        </G.InnerContainer>
      </Container>
    </S.SelectFriendsLayout>
  );
};

export default SelectFriend;
