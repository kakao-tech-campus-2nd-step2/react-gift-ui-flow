/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import styled from '@emotion/styled'

interface TextFieldProps {
	disabled: boolean
	[key: string]: any
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 20px;
`

const TextFieldStyle = styled.input<TextFieldProps>`
	border: none;
	border-radius: 0;
	padding: 0;
	font-size: inherit;
	width: 100%;
	outline: none;

	${({ disabled }) =>
		disabled
			? `
    background-color: lightgray;
    cursor: not-allowed;
    `
			: `
    background-color: transparent;
    cursor: text;
    `}
`

const UnderlineStyle = styled.div<{ isFocused: boolean; invalid: boolean }>`
	height: 2px;
	width: 100%;
	background-color: ${({ invalid, isFocused }) =>
		invalid ? 'red' : isFocused ? 'black' : 'gray'};
	transition: background-color 0.2s;
`

export const UnderlineTextField = ({
	placeholder,
	invalid,
	disabled,
	type = 'text',
}: {
	placeholder: string
	invalid: boolean
	disabled: boolean
	type?: string
}) => {
	const [isFocused, setIsFocused] = useState(false)
	const [value, setValue] = useState('')

	return (
		<Container>
			<TextFieldStyle
				type={type}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				disabled={disabled}
				placeholder={placeholder}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
			<UnderlineStyle isFocused={isFocused} invalid={invalid} />
		</Container>
	)
}
