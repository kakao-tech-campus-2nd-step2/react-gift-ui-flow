import { Box } from '@components/common/Box/Box'
import { BannerProps } from '@components/Banner/AIRecommendationBanner'
import { Image } from '@components/common/Image/Image'

export const FriendSelectionBanner = ({ title }: BannerProps) => {
	return (
		<Box
			width="100%"
			backgroundColor="#fafafa"
			display="flex"
			alignItems="center"
			flexDirection="row"
			justifyContent="flex-start"
			padding="40px 853px"
			margin="0 0 100px 0"
		>
			<Image
				src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png"
				width="60px"
				ratio="square"
				radius="16"
			/>
			<span style={{ marginLeft: '10px', fontSize: '24px' }}>{title}</span>
		</Box>
	)
}
