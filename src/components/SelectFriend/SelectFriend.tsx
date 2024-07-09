import styled from '@emotion/styled';
import React from 'react';

import { Image } from '@/components/common/Image';


const SelectFriendStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 180px;
  margin-bottom: 30px;
  background-color: #f5f5f5;
`;

const SelectFriendTextStyle = styled.span`
  font-size: 30px;
  font-weight: 600;
`;

const SelectFriendImageStyle =  styled(Image)`
  width: 70px;
  height: 70px;
  padding: 20px;
`;

const SelectFriend : React.FC = () => {
	return (
  <SelectFriendStyle>
	  <SelectFriendImageStyle src={'https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png'} alt="친구 선택 유도" radius={40} ratio="square"/>
	  <SelectFriendTextStyle>선물 받을 친구를 선택해주세요.</SelectFriendTextStyle>
  </SelectFriendStyle>
);
}

export default SelectFriend;