import styled from '@emotion/styled'
import { Image } from '@components/common/Image/Image'

export interface DefaultProps {
	imageSrc: string
	subTitle: string
	title: string
	amount: number
}

export const StyledDefault = styled.div`
	width: 120px;
	display: flex;
	flex-direction: column;
	align-items: left;
	overflow: hidden;

	h3 {
		margin-top: 20px;
		margin-bottom: 10px;
		color: #b1b1b1;
	}

	h1 {
		color: black;
		font-weight: semi-bold;
		margin-bottom: 15px;
	}

	h2 {
		color: black;
		font-size: 16px;
		font-weight: bold;
	}
`

export const GoodsItem = ({
	imageSrc,
	subTitle,
	title,
	amount,
}: DefaultProps) => {
	return (
		<StyledDefault>
			<Image src={imageSrc} width="120" ratio="square" radius="0" />
			<h3>{subTitle}</h3>
			<h1>{title}</h1>
			<h2>{amount}원</h2>
		</StyledDefault>
	)
}
