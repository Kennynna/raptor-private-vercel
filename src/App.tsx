//@ts-nocheck
import './index.css'
import { Nav } from './components/main-screen/nav'
import { Tab } from './components/main-screen/tab'
import { TokenTable } from './components/main-screen/token-table'
import { Head } from './components/main-screen/head'

import { BgMenuGreen } from './shared/icons/bg-menu'

function App() {
	return (
		<div className='flex flex-col h-[100vh] p-4 relative z-10 overflow-hidden mb-[15px]'>
			<Head />
			<Tab />
			<TokenTable />
			<BgMenuGreen />
			<img
				src='/noise.png'
				alt=''
				className='absolute top-0 left-0 z-[1] w-[100%] h-[100vh] object-cover opacity-40'
			/>
		</div>
	)
}

export default App
