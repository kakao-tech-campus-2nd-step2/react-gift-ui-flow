import styled from "@emotion/styled";
import React from "react";

import { DefaultGoodsItems } from "@/components/common/GoodsItem/Default";
import { Grid } from "@/components/common/layouts/Grid/index";

interface ItemType {
	imageSrc: string;
	subtitle: string;
	title: string;
	amount: number;
}

const imageUrls = {
  img: "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png",
  friendImg: "https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png",
  chickenImg : "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg"
};

const items: ItemType[] = [
	{ imageSrc: imageUrls.chickenImg, title: "BBQ 양념치킨+크림치즈볼+콜라1.25L", subtitle: "BBQ", amount:29000},
	{ imageSrc: imageUrls.chickenImg, title: "BBQ 양념치킨+크림치즈볼+콜라1.25L", subtitle: "BBQ", amount:29000},
	{ imageSrc: imageUrls.chickenImg, title: "BBQ 양념치킨+크림치즈볼+콜라1.25L", subtitle: "BBQ", amount:29000},
	{ imageSrc: imageUrls.chickenImg, title: "BBQ 양념치킨+크림치즈볼+콜라1.25L", subtitle: "BBQ", amount:29000},
	{ imageSrc: imageUrls.chickenImg, title: "BBQ 양념치킨+크림치즈볼+콜라1.25L", subtitle: "BBQ", amount:29000},
	{ imageSrc: imageUrls.chickenImg, title: "BBQ 양념치킨+크림치즈볼+콜라1.25L", subtitle: "BBQ", amount:29000},
	{ imageSrc: imageUrls.chickenImg, title: "BBQ 양념치킨+크림치즈볼+콜라1.25L", subtitle: "BBQ", amount:29000},
	{ imageSrc: imageUrls.chickenImg, title: "BBQ 양념치킨+크림치즈볼+콜라1.25L", subtitle: "BBQ", amount:29000},
	{ imageSrc: imageUrls.chickenImg, title: "BBQ 양념치킨+크림치즈볼+콜라1.25L", subtitle: "BBQ", amount:29000},
	{ imageSrc: imageUrls.chickenImg, title: "BBQ 양념치킨+크림치즈볼+콜라1.25L", subtitle: "BBQ", amount:29000},
	{ imageSrc: imageUrls.chickenImg, title: "BBQ 양념치킨+크림치즈볼+콜라1.25L", subtitle: "BBQ", amount:29000},
	{ imageSrc: imageUrls.chickenImg, title: "BBQ 양념치킨+크림치즈볼+콜라1.25L", subtitle: "BBQ", amount:29000},
	{ imageSrc: imageUrls.chickenImg, title: "BBQ 양념치킨+크림치즈볼+콜라1.25L", subtitle: "BBQ", amount:29000},
	{ imageSrc: imageUrls.chickenImg, title: "BBQ 양념치킨+크림치즈볼+콜라1.25L", subtitle: "BBQ", amount:29000},
	{ imageSrc: imageUrls.chickenImg, title: "BBQ 양념치킨+크림치즈볼+콜라1.25L", subtitle: "BBQ", amount:29000},
	{ imageSrc: imageUrls.chickenImg, title: "BBQ 양념치킨+크림치즈볼+콜라1.25L", subtitle: "BBQ", amount:29000},
];

const GridWrapper = styled.div`
  padding: 20px;
`;

const ThemeGoods: React.FC = () => {
	return (
	  <GridWrapper>
		<Grid columns={4} gap={20}>
		  {items.map((item, index) => (
			<DefaultGoodsItems key={index} imageSrc={item.imageSrc} subtitle={item.subtitle} title={item.title} amount={item.amount}/>
		  ))}
		</Grid>
		</GridWrapper>
	);
  };

export default ThemeGoods;
