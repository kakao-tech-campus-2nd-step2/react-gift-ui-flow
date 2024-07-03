/** @jsxImportSource @emotion/react */
import React from 'react';

import Item from '../components/common/Items/items';
import { Grid }  from '../components/common/layouts/Grid/index';

interface ItemType {
  image: string;
  label: string;
  radius?: 'circle' | number;
}

const imageUrls = {
	img: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png'
};

const items: ItemType[] = [
  { image: imageUrls.img, label: '생일'},
  { image: imageUrls.img, label: '졸업선물'},
  { image: imageUrls.img, label: '명품선물'},
  { image: imageUrls.img, label: '스몰럭셔리'},
  { image: imageUrls.img, label: '결혼/집들이' },
  { image: imageUrls.img, label: '따뜻한선물' },
  { image: imageUrls.img, label: '가벼운선물' },
  { image: imageUrls.img, label: '팬심저격' },
  { image: imageUrls.img, label: '교환권' },
  { image: imageUrls.img, label: '건강/비타민' },
  { image: imageUrls.img, label: '과일/한우' },
  { image: imageUrls.img, label: '출산/키즈' },
];

const Home: React.FC = () => {
	return (
	  <div>
		<Grid columns={4} gap={20}>
		  {items.map((item, index) => (
			<Item key={index} image={item.image} label={item.label} radius={item.radius} />
		  ))}
		</Grid>
	  </div>
	);
  };

export default Home;