/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useNavigate } from 'react-router-dom'

const headerStyle = css`
	position: fixed;
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #fff;
	border-bottom: 1px solid #dee2e6;
`

const titleStyle = css`
	font-size: 20px;
	font-weight: bold;
	color: black;
	margin-left: 853px;
`

const buttonStyle = css`
	font-size: 16px;
	font-weight: regular;
	cursor: pointer;
	margin-right: 853px;
	border: none;
	background-color: transparent;
`

export const Header = () => {
	const navigate = useNavigate()

	const handleLoginClick = () => {
		navigate('/login')
	}

	return (
		<header css={headerStyle}>
			<div css={titleStyle}>선물하기</div>
			<button css={buttonStyle} onClick={handleLoginClick}>
				로그인
			</button>
		</header>
	)
}
