/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import styled from '@emotion/styled';
import React from 'react';

import GoodsCatygory from '@/components/GoodsCategory/GoodsCategory';
import RankingHeader from '@/components/Ranking/RankingHeader';

import { Button } from '../components/common/Button/index';
import { Image } from '../components/common/Image/index';
import Filter from '../components/Ranking/Filter/Filter';

const imageUrls = {
	img: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
	friendImg: 'https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png'
};

const selectFriendStyle = css`
  display: flex;
  align-items: center;
  width: 100%;
  height: 180px;
  margin-bottom: 30px;
  background-color: #f5f5f5;
`;

const selectFriendImageStyle = css`
  width: 70px;
  height: 70px;
  padding: 20px;
`;

const buttonStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: none;
  width: 85%;
  margin: 40px auto;
  padding: 5px;
  
  p {
    margin: 3px 0;
  }
`;

const SelectFriend : React.FC = () => {
	  return (
	<div css={selectFriendStyle}>
		<Image src={imageUrls.friendImg} alt="친구 선택 유도" radius={40} ratio="square" css={selectFriendImageStyle}/>
		<span css={{ fontSize: '30px', fontWeight: 600}}>선물 받을 친구를 선택해주세요.</span>
	</div>
  );
}
	

const Home: React.FC = () => {
	return (
	  <div>
		<SelectFriend />
    <GoodsCatygory />
		<Button css={buttonStyle}>
			<p css={{color:'gray', fontSize:'18px'}}>AI가 추천하는 선물</p>
			<p css={{fontWeight: 600, fontSize:'18px'}}>선물을 추천받고 싶은 친구를 선택해주세요.</p>
		</Button>
    <RankingHeader />
    <Filter />
	  </div>
	);
  };

export default Home;