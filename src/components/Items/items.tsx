/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Link }	from 'react-router-dom';

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

const linkStyle = css`
  outline: none;
  &:focus,
  &:active {
    outline: none;
  }
`;

interface ItemProps {
  image: string;
  label: string;
  themekey: string;
  radius?: 'circle' | number;
}

const Item: React.FC<ItemProps> = ({ image, label, radius, themekey}) => {
	radius = 20;
  return (
    <div css={itemStyle}>
	<Link to={`/theme/${themekey}`} css={linkStyle}>
      <Image src={image} alt={label} radius={radius} ratio="square" css={{ width: 90, height: 90 }}/>
	  </Link>
      <span>{label}</span>
    </div>
  );
};

export default Item;

