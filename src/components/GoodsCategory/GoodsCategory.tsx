import styled from "@emotion/styled";
import React from "react";

import { Grid } from "@/components/common/layouts/Grid";
import Item from "@/components/Items/items";

interface ItemType {
	image: string;
	label: string;
	themekey: string;
	radius?: 'circle' | number;
  }
  
  const imageUrls = {
	  img: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
	  friendImg: 'https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png'
  };
  
  const items: ItemType[] = [
	{ image: imageUrls.img, label: '생일', themekey: 'birthday' },
	{ image: imageUrls.img, label: '졸업선물', themekey: 'graduation'},
	{ image: imageUrls.img, label: '명품선물', themekey: 'luxury'},
	{ image: imageUrls.img, label: '스몰럭셔리', themekey: 'luxury'},
	{ image: imageUrls.img, label: '결혼/집들이', themekey: 'wedding'},
	{ image: imageUrls.img, label: '따뜻한선물' , themekey: 'warm'},
	{ image: imageUrls.img, label: '가벼운선물' , themekey: 'light'},
	{ image: imageUrls.img, label: '팬심저격', themekey: 'fan'},
	{ image: imageUrls.img, label: '교환권', themekey: 'exchange'},
	{ image: imageUrls.img, label: '건강/비타민', themekey: 'health'},
	{ image: imageUrls.img, label: '과일/한우', themekey: 'fruit'},
	{ image: imageUrls.img, label: '출산/키즈', themekey: 'kids'},
  ];

const GridWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  align-items: center;
`;

const GoodsCatygory: React.FC = () => {
	return (
		<GridWrapper>
		<Grid columns={4} gap={20}>
		  {items.map((item, index) => (
			<Item key={index} image={item.image} label={item.label} radius={item.radius} themekey={item.themekey}/>
		  ))}
		</Grid>
    </GridWrapper>
	);
};

export default GoodsCatygory;