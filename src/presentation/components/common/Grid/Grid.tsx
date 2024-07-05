import { ReactNode } from 'react'
import styled from '@emotion/styled'

type ResponseGridStyle = {
	lg: number
	initial: number
	md: number
	sm: number
}

interface GridProps {
	columns: number | ResponseGridStyle
	gap: number
	children: ReactNode
}

const StyledGrid = styled.div<GridProps>`
	display: grid;
	grid-template-columns: repeat(${(props) => props.columns}, 1fr);
	gap: ${(props) => `${props.gap}px`};
`

export const Grid = ({ columns, gap, children }: GridProps) => {
	return (
		<StyledGrid columns={columns} gap={gap}>
			{children}
		</StyledGrid>
	)
}
