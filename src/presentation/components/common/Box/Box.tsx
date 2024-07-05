import React from 'react'
import styled from '@emotion/styled'

interface BoxProps {
	width?: string
	height?: string
	backgroundColor: string
	margin?: string
	padding?: string
	borderRadius?: string
	children?: React.ReactNode
	display?: string
	flexDirection?: string
	justifyContent?: string
	alignItems?: string
}

const StyledBox = styled.div<BoxProps>`
	width: ${(props) => props.width || 'auto'};
	height: ${(props) => props.height || 'auto'};
	background-color: ${(props) => props.backgroundColor};
	margin: ${(props) => props.margin || '0'};
	border-radius: ${(props) => props.borderRadius || '0'};
	padding: ${(props) => props.padding || '0'};
	display: ${(props) => props.display || 'flex'};
	flex-direction: ${(props) => props.flexDirection || 'column'};
	justify-content: ${(props) => props.justifyContent || 'center'};
	align-items: ${(props) => props.alignItems || 'center'};
	transition: background-color 0.3s ease-in-out;
`

export const Box: React.FC<BoxProps> = ({
	width,
	height,
	backgroundColor,
	margin,
	padding,
	borderRadius,
	display = 'flex',
	flexDirection = 'column',
	justifyContent = 'center',
	alignItems = 'center',
	children,
}: BoxProps) => {
	return (
		<StyledBox
			width={width}
			height={height}
			backgroundColor={backgroundColor}
			margin={margin}
			padding={padding}
			borderRadius={borderRadius}
			display={display}
			flexDirection={flexDirection}
			justifyContent={justifyContent}
			alignItems={alignItems}
		>
			{children}
		</StyledBox>
	)
}
