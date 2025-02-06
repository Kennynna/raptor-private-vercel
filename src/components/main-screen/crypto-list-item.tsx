import { cn } from '@/lib/utils'
import { TonIcon } from '@/shared/icons/ton'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export const CryptoListItem = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [active, setActive] = useState(0)
	function handleClick(index: number) {
		setActive(index)
		setIsOpen(false)
	}
	const crypto = [
		'TON',
		'Ethereum',
		'Solana',
		'The Open Network',
		'BNB Smart Chain',
		'Base',
		'Tron',
	]
	return (
		<>
			{isOpen && <div className='fixed inset-0 overlay z-[30] w-full h-full' />}{' '}
			<div
				className={cn(
					'flex font-medium items-center gap-[4px] cursor-pointer z-[30] relative  p-2 w-max select-none',
					isOpen ? 'crypto-header-main' : ''
				)}
				onClick={() => setIsOpen(!isOpen)}
			>
				<TonIcon />
				<p>{crypto[active]}</p>
				<ChevronDown
					className={isOpen ? 'rotate-180' : ''}
					width={18}
					height={18}
					color={isOpen ? 'var(--green)' : 'rgba(255, 255, 255, 1)'}
				/>
				{isOpen && (
					<div className='absolute top-[130%] left-0  min-w-[200px] flex flex-col gap-1 z-30'>
						{crypto.map((item, index) => (
							<div
								className='crypto-header-item  flex font-medium items-center gap-[4px] cursor-pointer p-2'
								onClick={() => handleClick(index)}
							>
								<TonIcon /> {item}
							</div>
						))}
					</div>
				)}
			</div>
		</>
	)
}
