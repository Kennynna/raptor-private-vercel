import { useState } from 'react'
import { QuickBuy } from './quick-buy'
import { Bridge } from './bridge'
import { CallSniper } from './call'
import { Copytrading } from './copytrading'
import { BridgeFull } from './bridge-full'
import { QuickBuyFull } from './quick-buy-full'
import { TonIcon } from '@/shared/icons/ton'
import { ArrowDawn } from '@/shared/icons/for-logic/arrow-dawn'
import { CopyTradingFull } from './copytrading-full'
import { CallSniperFull } from './call-sniper-full'

export const ToolsMain = () => {
	const [activeMenu, setActiveMenu] = useState<
		'QUICKBUY' | 'BRIDGE' | 'COPYTRADING' | 'CALL_SNIPER' | ''
	>('')

	const handleActiveMenu = (
		menu: 'QUICKBUY' | 'BRIDGE' | 'COPYTRADING' | 'CALL_SNIPER' | ''
	) => {
		setActiveMenu(menu)
	}

	if (activeMenu === 'QUICKBUY') {
		return <QuickBuyFull />
	}
	if (activeMenu === 'BRIDGE') {
		return <BridgeFull />
	}
	if (activeMenu === 'COPYTRADING') {
		return <CopyTradingFull/>
	} else
	if (activeMenu === 'CALL_SNIPER') {
		return <CallSniperFull />
	} else
		return (
			<>
				<div className='flex p-4 w-full items-center justify-between'>
					<div className='flex font-medium items-center gap-[4px] cursor-pointer z-[30] relative  p-2 w-max select-none'>
						<TonIcon />
						<p>TON</p>
						<ArrowDawn />
					</div>
					<div className='flex font-medium items-center gap-[4px] cursor-pointer z-[30] relative  p-2 w-max select-none'>
						<p>YxOd4A...kdOW2q</p>
						<ArrowDawn />
					</div>
				</div>

				<div className='flex flex-col w-full p-4 gap-2'>
					<Copytrading setActiveMenu={handleActiveMenu} />

					{/* 2 bock */}
					<CallSniper  setActiveMenu={handleActiveMenu} />

					{/* 3 block */}
					<Bridge setActiveMenu={handleActiveMenu} />

					{/* 4 block */}
					<QuickBuy setActiveMenu={handleActiveMenu} />
				</div>
			</>
		)
}
