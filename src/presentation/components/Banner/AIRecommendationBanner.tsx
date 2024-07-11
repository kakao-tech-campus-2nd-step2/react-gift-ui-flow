/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
// import styled from '@emotion/styled'

export interface BannerProps {
	title: string
	subTitle?: string
	children?: React.ReactNode
	description?: string
}

const bannerStyle = css`
	width: 100%;
	margin: 10px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #faeb59;
`

export const AIRecommendationBanner = ({ title, subTitle }: BannerProps) => {
	return (
		<div css={bannerStyle} className="ai-recommendation-banner">
			<span
				style={{
					color: '#998f27',
					marginBottom: '8px',
					marginTop: '10px',
					fontSize: '16px',
				}}
			>
				{subTitle}
			</span>
			<span
				style={{
					fontWeight: 'bold',
					marginBottom: '10px',
					fontSize: '18px',
				}}
			>
				{title}
			</span>
		</div>
	)
}
