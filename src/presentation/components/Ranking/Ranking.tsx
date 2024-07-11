/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Box } from '@components/common/Box/Box'
import { TargetCategoryButton } from '@components/common/Button/TargetCategoryButton'
import { GiftPopularityCategoryButton } from '@components/common/Button/GiftPopularityButton'
import { Grid } from '@components/common/Grid/Grid'
import { RankingGoodsItem } from '@components/common/GoodsItem/RankingGoodsItem'
import { ShowMoreButton } from '@components/common/Button/ShowMoreButton'

const popularityCategoryData = ['받고 싶어한', '많이 선물한', '위시로 받은']

const datas: { emoji: string; text: string }[] = [
	{
		emoji: 'ALL',
		text: '전체',
	},

	{
		emoji: '🤶🏻',
		text: '여성',
	},
	{
		emoji: '👴🏻',
		text: '남성',
	},
	{
		emoji: '🧒🏻',
		text: '청소년',
	},
]

const StyledBox = styled(Box)`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
	margin-bottom: 10px;
`

const rankingContainerStyle = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 130px;
`

export const Ranking = () => {
	const [targetActiveIndex, setTargetActiveIndex] = useState<number | null>(
		null,
	)
	const [popularityActiveIndex, setPopularityActiveIndex] = useState<
		number | null
	>(0)

	const [showAll, setShowAll] = useState(false)

	const handleShowMore = () => {
		setShowAll((prevShowAll) => !prevShowAll)
	}

	const items = Array.from({ length: 21 })

	return (
		<div css={rankingContainerStyle}>
			<h2 style={{ fontSize: '30px', fontWeight: '900', marginBottom: '30px' }}>
				실시간 급상승 선물랭킹
			</h2>

			<div
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'space-around',
				}}
			>
				{datas.map((data, index) => (
					<TargetCategoryButton
						width="50px"
						height="50px"
						emoji={data.emoji}
						text={data.text}
						onClick={() => {
							setTargetActiveIndex(index)
						}}
						isActive={targetActiveIndex === index}
					/>
				))}
			</div>

			<StyledBox
				width="100%"
				margin="30px 0"
				padding="13px 0 16px 0"
				flexDirection="row"
				backgroundColor="#e7f1fe"
				borderRadius="10px"
			>
				{popularityCategoryData.map((data, index) => (
					<GiftPopularityCategoryButton
						key={index}
						text={data}
						onClick={() => {
							setPopularityActiveIndex(index)
						}}
						isActive={popularityActiveIndex === index}
					/>
				))}
			</StyledBox>

			<Grid columns={6} gap={10}>
				{items.slice(0, showAll ? 21 : 6).map((_, index) => (
					<RankingGoodsItem
						key={index}
						imageSrc="https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg"
						subTitle="BBQ"
						title="BBQ 양념치킨+크림치즈볼+콜라1.25L"
						amount={29000}
						rankingIndex={index + 1}
					/>
				))}
			</Grid>

			<ShowMoreButton onClick={handleShowMore} isShowAll={showAll} />
		</div>
	)
}
