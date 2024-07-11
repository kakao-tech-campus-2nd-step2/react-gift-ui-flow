/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../shared/utils/AuthContext'
import { UnderlineTextField } from '@components/common/TextField/UnderlineTextField'
import styled from '@emotion/styled'

const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
`

const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	width: 300px;
`

export const Login: React.FC = () => {
	const [username] = useState('')
	const navigate = useNavigate()
	const location = useLocation()
	const auth = useAuth()

	const from = location.state?.from?.pathname || '/'

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault()
		auth.login(username)
		navigate(from, { replace: true })
	}

	return (
		<LoginContainer>
			<h2>Login</h2>
			<FormContainer onSubmit={handleLogin}>
				<UnderlineTextField
					placeholder="Username"
					invalid={false}
					disabled={false}
				/>
				<UnderlineTextField
					placeholder="Password"
					invalid={false}
					disabled={false}
					type="password"
				/>
				<button type="submit">Login</button>
			</FormContainer>
		</LoginContainer>
	)
}
