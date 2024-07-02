import styled from '@emotion/styled';

import InnerStyle from '@/styles/innerStyle';

const StyledFriend = styled.section`
  background: rgb(250, 250, 250);
  padding: 40px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInner = styled(InnerStyle)`
  display: flex;
  align-items: center;

  img {
    width: 70px;
    height: 70px;
    border-radius: 24px;
    cursor: pointer;
  }
  p {
    font-size: 28px;
    color: rgb(51, 51, 51);
    font-weight: 500;
    line-height: 35px;
    padding-left: 16px;
  }
`;

const Friend = () => {
  return (
    <StyledFriend>
      <StyledInner>
        <img
          src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png"
          alt="친구 선택 유도 아이콘"
          onClick={() => alert('선물 받을 친구 선택하기')}
        />
        <p>선물 받을 친구를 선택해주세요.</p>
      </StyledInner>
    </StyledFriend>
  );
};
export default Friend;
