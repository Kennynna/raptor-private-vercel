import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { WalletDropList } from './wallet-drop-list'
import { cn } from '@/lib/utils'

export const WalletListItem = () => {
	// Состояние для отображения основного списка кошельков
	const [isOpen, setIsOpen] = useState(false)

	// Пример данных
	const wallets = [
		{ id: 1, name: 'Main wallet', address: 'YxOd4A...kdOW2q' },
		{ id: 2, name: 'Second wallet', address: 'AbCd4B...XYzW21' },
	]

	return (
		<div className={cn('relative ', isOpen ? 'z-[70]' : 'z-[29]')}>
			{/* Заголовок (или кнопка) для раскрытия списка */}
			<div
				className={`flex items-center gap-2 cursor-pointer  px-2 py-1 select-none ${
					isOpen ? 'crypto-wallet-active' : ''
				}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<p className='font-medium '>YxO...W2q</p>
				<ChevronDown
					width={18}
					height={18}
					color={isOpen ? 'var(--green)' : 'rgba(255, 255, 255, 1)'}
					className={isOpen ? 'rotate-180 ' : ''}
				/>
			</div>

			{/* Если isOpen === true, то показываем общий дроп (WalletDropList) */}
			{isOpen && <WalletDropList wallets={wallets} />}
		</div>
	)
}
