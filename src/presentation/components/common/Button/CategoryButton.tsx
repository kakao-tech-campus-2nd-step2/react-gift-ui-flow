/** @jsxImportSource @emotion/react */
import React from 'react'
import styled from '@emotion/styled'
import { Image } from '@components/common/Image/Image'

export interface CategoryButtonProps {
	onClick: () => void
	children?: React.ReactNode
	[key: string]: any
}

const CategoryButtonStyle = styled.button<CategoryButtonProps>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	font-weight: regular;
	gap: 10px;
	border: none;
	background: none;
	cursor: pointer;
`

export const CategoryButton = ({
	src,
	width,
	ratio,
	radius,
	text,
	onClick,
	children,
}: CategoryButtonProps) => {
	return (
		<CategoryButtonStyle onClick={onClick}>
			<Image src={src} width={width} ratio={ratio} radius={radius} />
			{text}
			{children}
		</CategoryButtonStyle>
	)
}
