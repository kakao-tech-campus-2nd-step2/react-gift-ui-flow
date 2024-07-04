/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from "react";

const headerStyle = css`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 20px 0;
`;

const RankingHeader: React.FC = () => {
	return (
	  <div css={headerStyle}>
		실시간 급상승 선물랭킹
	  </div>
	);
  };
  
  export default RankingHeader;