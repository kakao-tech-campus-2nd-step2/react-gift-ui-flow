import React, { createContext, useContext, useState, ReactNode } from 'react'

interface AuthContextProps {
	isAuthenticated: boolean
	login: (username: string) => void
	logout: () => void
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
		return !!sessionStorage.getItem('authToken')
	})

	const login = (username: string) => {
		sessionStorage.setItem('authToken', username)
		setIsAuthenticated(true)
	}

	const logout = () => {
		sessionStorage.removeItem('authToken')
		setIsAuthenticated(false)
	}

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = (): AuthContextProps => {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider')
	}
	return context
}
