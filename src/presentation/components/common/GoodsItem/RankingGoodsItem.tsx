import styled from '@emotion/styled'
import {
	DefaultProps,
	StyledDefault,
	GoodsItem,
} from '@components/common/GoodsItem/GoodsItem'

interface RankingGoodsItempProps extends DefaultProps {
	rankingIndex: number
}

const StyledRankingGoodsItem = styled(StyledDefault)<{ rankingIndex: number }>`
	position: relative;

	.ranking-box {
		position: absolute;
		top: 0;
		left: 0;
		width: 30px;
		height: 30px;
		background-color: ${({ rankingIndex }) =>
			rankingIndex > 3 ? '#bbb' : '#fb7a69'};
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 5px;
		font-size: 16px;
		font-weight: bold;
		color: white;
	}
`

export const RankingGoodsItem = ({
	imageSrc,
	subTitle,
	title,
	amount,
	rankingIndex,
}: RankingGoodsItempProps) => {
	return (
		<StyledRankingGoodsItem rankingIndex={rankingIndex}>
			<div className="ranking-box">{rankingIndex}</div>
			<GoodsItem
				imageSrc={imageSrc}
				subTitle={subTitle}
				title={title}
				amount={amount}
			/>
		</StyledRankingGoodsItem>
	)
}
