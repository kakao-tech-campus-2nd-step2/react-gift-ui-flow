import { Grid } from '@components/common/Grid/Grid'
import { GoodsItem } from '@components/common/GoodsItem/GoodsItem'
import { SimpleGiftBanner } from '@components/Banner/SimpleGiftBanner'

export const LifeSmallGift = () => {
	const items = Array(17).fill({
		imageSrc:
			'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
		subTitle: 'BBQ',
		title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
		amount: '29000',
	})

	return (
		<div>
			<SimpleGiftBanner
				title="예산은 가볍게, 감동은 무겁게❤️"
				subTitle="가벼운 선물"
				description="당신의 센스를 뽐내줄 부담 없는 선물"
			/>

			<div
				style={{
					margin: '0 853px',
				}}
			>
				<Grid columns={4} gap={1}>
					{items.map((item) => (
						<GoodsItem
							imageSrc={item.imageSrc}
							subTitle={item.subTitle}
							title={item.title}
							amount={item.amount}
						/>
					))}
				</Grid>
			</div>
		</div>
	)
}
