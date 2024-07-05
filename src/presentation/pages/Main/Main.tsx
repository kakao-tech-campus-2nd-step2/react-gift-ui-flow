/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { GiftCategoryGrid } from '@components/GiftCategoryGrid'
import { Ranking } from '@components/Ranking/Ranking'
import { AIRecommendationBanner } from '@components/Banner/AIRecommendationBanner'
import { FriendSelectionBanner } from '@components/Banner/FriendSelectionBanner'

const mainStyle = css`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 853px;
`

export const Main = () => {
	return (
		<>
			<FriendSelectionBanner title="선물 받을 친구를 선택해주세요." />
			<div className="main" css={mainStyle}>
				<GiftCategoryGrid />

				<AIRecommendationBanner
					title="선물을 추천받고 싶은 친구를 선택해주세요."
					subTitle="AI가 추천하는 선물"
				/>

				<Ranking />
			</div>
		</>
	)
}
