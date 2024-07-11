import styled from '@emotion/styled'

export interface ImageProps {
	src: string
	width: string
	ratio: number | 'auto' | 'square'
	radius: string
}

const getRatio = (ratio: number | 'auto' | 'square'): string => {
	if (ratio === 'auto') {
		return 'auto'
	}

	if (ratio === 'square') {
		return '100%'
	}

	if (ratio > 100) {
		return ''
	}

	return `${ratio}`
}

const getBorderRadius = (radius: string): string => {
	if (radius === 'auto') {
		return 'auto'
	}

	if (radius === 'circle') {
		return '50%'
	}
	return `${radius}px`
}

const StyledImage = styled.img<ImageProps>`
	width: ${(props) => `${props.width}px`}
	height: ${(props) => (props.ratio === 'square' ? `${props.width}px` : 'auto')}
	ratio: ${(props) => getRatio(props.ratio)};
	border-radius: ${(props) => getBorderRadius(props.radius)};
`

export const Image = ({ src, width, ratio, radius }: ImageProps) => {
	return <StyledImage src={src} width={width} ratio={ratio} radius={radius} />
}
