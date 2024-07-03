/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

import { Image } from '@/components/common/Image/index';

const itemStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  span {
    margin-top: 10px;
    font-size: 14px;
  }
`;

interface ItemProps {
  image: string;
  label: string;
  radius?: 'circle' | number;
}

const Item: React.FC<ItemProps> = ({ image, label, radius}) => {
	radius = 20;
  return (
    <div css={itemStyle}>
      <Image src={image} alt={label} radius={radius} ratio="square" css={{ width: 90, height: 90 }}/>
      <span>{label}</span>
    </div>
  );
};

export default Item;

