import styled from '@emotion/styled';
import React from 'react';

const imageUrl = 'https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png';

const SelectFriend: React.FC = () => {
  return (
    <SelectFriendContainer>
      <ThemeImage src={imageUrl} alt="선물할 친구 선택" />
      <Label>선물 받을 친구를 선택해주세요. </Label>
    </SelectFriendContainer>
  );
};

const SelectFriendContainer = styled.div`
  display: flex;
  background: rgb(250, 250, 250);
  align-items: center;
  padding: 18px 16px;
  box-sizing: border-box;
  height: auto;
`;

const ThemeImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 16px;
  cursor: pointer;
`;

const Label = styled.div`
  padding-left: 16px;
  font-size: 17px;
  line-height: 22px;
  color: rgb(51, 51, 51);
  font-weight: 500;
`;

export default SelectFriend;
