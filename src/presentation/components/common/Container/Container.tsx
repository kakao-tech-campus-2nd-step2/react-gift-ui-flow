import { ReactNode } from 'react'
import styled from '@emotion/styled'

interface ContainerProps {
	maxWidth: string
	children: ReactNode
	flexDirection: 'row' | 'column'
	justifyContent:
		| 'center'
		| 'flex-start'
		| 'flex-end'
		| 'space-between'
		| 'space-around'
	alignItems: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch'
}

const StyledContainer = styled.div<ContainerProps>`
	maxwidth: ${(props) => `${props.maxWidth}`};
	display: flex;
	flex-direction: ${(props) => props.flexDirection};
	justify-content: ${(props) => props.justifyContent};
	align-items: ${(props) => props.alignItems};
`
export const Container = ({
	maxWidth,
	children,
	flexDirection,
	justifyContent,
	alignItems,
}: ContainerProps) => {
	return (
		<StyledContainer
			maxWidth={maxWidth}
			flexDirection={flexDirection}
			justifyContent={justifyContent}
			alignItems={alignItems}
		>
			{children}
		</StyledContainer>
	)
}
