/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const footerStyle = css`
	width: 100%;
	height: 200px;
	background-color: #fafafc;
	padding-left: 50px;
	padding-right: 50px;
	padding-top: 30px;
	margin: 0 auto;
`

export const Footer = () => {
	return <footer css={footerStyle}>카카오톡 선물하기</footer>
}
