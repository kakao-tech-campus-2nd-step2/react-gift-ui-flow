/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';


const ThemeHeaderStyle = css`
  display: flex;
  align-items: center;
  width: 100%;
  height: 180px;
  margin-bottom: 30px;
  background-color: #f5f5f5;
`;

const ThemeHeader : React.FC = () => {
	return (
  <div css={ThemeHeaderStyle}>
	  <span css={{ fontSize: '30px', fontWeight: 600}}>선물 받을 친구를 선택해주세요.</span>
  </div>
);
}

export default ThemeHeader;