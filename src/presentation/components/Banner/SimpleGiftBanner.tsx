import { Box } from '@components/common/Box/Box'
import { BannerProps } from '@components/Banner/AIRecommendationBanner'

export const SimpleGiftBanner = ({
	title,
	subTitle,
	description,
}: BannerProps) => {
	return (
		<Box
			width="100%"
			backgroundColor="#4b4d50"
			display="flex"
			flexDirection="column"
			alignItems="flex-start"
			justifyContent="flex-start"
			padding="40px 853px"
			margin="0 0 100px 0"
		>
			<div
				style={{
					color: '#c9cacb',
					fontWeight: '900',
					marginLeft: '10px',
					fontSize: '16px',
					marginBottom: '10px',
				}}
			>
				{subTitle}
			</div>
			<div
				style={{
					color: '#fff',
					fontWeight: '900',
					marginLeft: '10px',
					fontSize: '24px',
					marginBottom: '10px',
				}}
			>
				{title}
			</div>
			<div
				style={{
					color: '#aeafb0',
					fontWeight: 'normal',
					marginLeft: '10px',
					fontSize: '20px',
				}}
			>
				{description}
			</div>
		</Box>
	)
}
