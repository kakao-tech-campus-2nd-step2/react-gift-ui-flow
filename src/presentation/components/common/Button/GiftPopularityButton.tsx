import { CategoryButton } from '@components/common/Button/CategoryButton'
import { CategoryButtonProps } from '@components/common/Button/CategoryButton'

interface TargetCategoryButtonProps extends CategoryButtonProps {
	isActive?: boolean
}

export const GiftPopularityCategoryButton = ({
	text,
	isActive = false,
	onClick,
}: TargetCategoryButtonProps) => {
	return (
		<CategoryButton onClick={onClick}>
			<span
				style={{
					fontSize: '18px',
					color: isActive ? '#4e84e5' : '#7ca4ec',
					fontWeight: isActive ? 'bold' : 'normal',
					transition: 'color 0.35s',
				}}
			>
				{text}
			</span>
		</CategoryButton>
	)
}
