//@ts-nocheck
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.tsx'
import Research from './pages/Research.tsx'
import Profile from './pages/Profile.tsx'
import Tools from './pages/Tools.tsx'
import { Nav } from './components/main-screen/nav.tsx'
import Token from './components/main-screen/Token-info/Token.tsx'

const root = document.getElementById('root')
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<div className='app-wrapper relative '>
				<Routes>
					<Route path='/' element={<App />} />
					<Route path='research' element={<Research />} />
					<Route path='profile' element={<Profile />} />
					<Route path='tools' element={<Tools />} />
					<Route path='token' element={<Token />} />
				</Routes>
				<Nav />
			</div>
		</BrowserRouter>
	</StrictMode>
)
