import styled from '@emotion/styled'
import { CategoryButtonProps } from '@components/common/Button/CategoryButton'
import { Box } from '@components/common/Box/Box'

interface TargetCategoryButtonProps extends CategoryButtonProps {
	isActive?: boolean
}

const StyledTargetCategoryButton = styled.button<TargetCategoryButtonProps>`
	border: none;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	outline: none;
	cursor: pointer;
`

export const TargetCategoryButton = ({
	width,
	height,
	emoji,
	text,
	onClick,
	isActive = false,
}: TargetCategoryButtonProps) => {
	return (
		<StyledTargetCategoryButton onClick={onClick}>
			<Box
				width={width}
				height={height}
				backgroundColor={isActive ? '#4e84e5' : '#e7f1fe'}
				margin="10px"
				padding="5px"
				borderRadius="20px"
			>
				<span style={{ fontSize: '1.5rem' }}>{emoji}</span>
			</Box>
			<span
				style={{
					fontSize: '18px',
					color: isActive ? '#4e84e5' : 'black',
					fontWeight: isActive ? 'bold' : 'normal',
				}}
			>
				{text}
			</span>
		</StyledTargetCategoryButton>
	)
}
