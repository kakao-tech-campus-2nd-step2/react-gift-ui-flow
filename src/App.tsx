import { Global } from '@emotion/react'
import emotionReset from 'emotion-reset'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Button } from '@components/common/Button/Button'
import { Header } from './presentation/components/Header'
import { Login } from './presentation/pages/Login'
import { Footer } from './presentation/components/Footer'
import { Main } from '@pages/Main/Main'
import { LifeSmallGift } from '@pages/LifeSmallGift'

function App() {
	return (
		<>
			<Global styles={emotionReset} />
			<Router>
				<Header />
				<main style={{ minHeight: '100vh' }}>
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/theme/life_small_gift" element={<LifeSmallGift />} />
						<Route path="/" element={<Main />} />
					</Routes>
				</main>
				<Footer />
			</Router>
		</>
	)
}

export default App
