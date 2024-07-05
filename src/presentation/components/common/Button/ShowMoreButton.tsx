/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

const StyledShowMoreButton = styled.button`
	width: 50%;
	padding: 18px 0;
	margin-top: 20px;
	margin-bottom: 200px;
	border-radius: 5px;
	background-color: transparent;
	border: 1px solid #ccc;
	cursor: pointer;
	transition: background-color linear 0.3s;
	font-size: 16px;
	&:hover {
		background-color: #f8f8f8;
	}
`

export const ShowMoreButton = ({
	onClick,
	isShowAll,
}: {
	onClick: () => void
	isShowAll: boolean
}) => {
	return (
		<StyledShowMoreButton onClick={onClick}>
			{isShowAll ? '접기' : '더보기'}
		</StyledShowMoreButton>
	)
}
