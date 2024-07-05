import styled from '@emotion/styled';

import { Image } from '@/components/common/Image/index';
import { Container } from '@/components/common/layouts/Container';

const SelectFriendContainer = styled(Container)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  background-color: rgb(250, 250, 252);
`;

const SelectFriendInner = styled.section`
  display: flex;
  align-items: center;
  width: 80%;
  padding: 0px 16px;

  p {
    padding-left: 16px;
    font-size: 28px;
  }
`;

export const SelectFriend = () => (
  <>
    <SelectFriendContainer>
      <SelectFriendInner>
        <Image
          src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png"
          alt="친구 선택 유도 아이콘"
          width="70px"
          radius={16}
          ratio="square"
        ></Image>
        <p>선물 받을 친구를 선택해주세요.</p>
      </SelectFriendInner>
    </SelectFriendContainer>
  </>
);
export default SelectFriend;
