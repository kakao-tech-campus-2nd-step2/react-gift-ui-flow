/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

import GoodsCatygory from '@/components/GoodsCategory/GoodsCategory';
import RankingHeader from '@/components/Ranking/RankingHeader';
import SelectFriend from '@/components/SelectFriend/SelectFriend';

import { Button } from '../components/common/Button/index';
import Filter from '../components/Ranking/Filter/Filter';



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