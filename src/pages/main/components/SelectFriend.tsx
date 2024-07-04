import { Container } from '@/components/common/layouts/Container';
import * as styles from '../styles';
import * as globals from '@/styles/GlobalStyles';
import SelectImg from '@/assets/main/Friends_Icon.png';

const SelectFriend = () => {
  return (
    <styles.SelectFriendsLayout>
      <Container>
        <globals.InnerContainer justifyContent="flex-start">
          <styles.FriendImg src={SelectImg} alt="친구 선택 유도 아이콘" />
          <styles.Text>선물 받을 친구를 선택해주세요.</styles.Text>
        </globals.InnerContainer>
      </Container>
    </styles.SelectFriendsLayout>
  );
};

export default SelectFriend;
