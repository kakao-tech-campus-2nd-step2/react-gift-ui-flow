import { useNavigate } from 'react-router-dom'
import { Grid } from '@components/common/Grid/Grid'
import { CategoryButton } from '@components/common/Button/CategoryButton'

export const GiftCategoryGrid = () => {
	const navigate = useNavigate()
	const categoryName = [
		'생일',
		'졸업선물',
		'스몰럭셔리',
		'명품선물',
		'결혼/집들이',
		'따뜻한선물',
		'가벼운선물',
		'팬심저격',
		'교환권',
		'건강/비타민',
		'과일/한우',
		'출산/키즈',
	]

	const handleClick = (category = 'life_small_gift') => {
		navigate(`/theme/${category}`)
	}

	return (
		<div style={{ width: '100%', marginBottom: '50px' }}>
			<Grid columns={6} gap={10}>
				{categoryName.map((name, index) => (
					<CategoryButton
						key={index}
						onClick={() => handleClick()}
						src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
						width="90px"
						ratio="square"
						radius="30"
						text={name}
					/>
				))}
			</Grid>
		</div>
	)
}
