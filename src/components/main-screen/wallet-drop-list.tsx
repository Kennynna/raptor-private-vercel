import {PencilLine} from 'lucide-react'
import {useState} from 'react'
import {WalletEditDrop} from './wallet-edit-drop'

// Тип можно уточнить
type Wallet = {
    id: number
    name: string
    address: string
}

interface WalletDropListProps {
    wallets: Wallet[]
}

export const WalletDropList: React.FC<WalletDropListProps> = ({wallets}) => {
    // Состояние для «редактирующего» дропа
    const [editingWalletId, setEditingWalletId] = useState<number | null>(null)

    return (
			<>
				{/* Оверлей на всю страницу, чтобы «затемнить» фон */}
				<div className='fixed inset-0 overlay z-30 select-none' />

				{/* Основной контейнер на всю ширину/высоту, выровнен по центру */}
				<div className='fixed inset-0 z-40 flex  justify-center top-[7%]'>
					<div className=' w-[90vw] max-w-[100%] rounded-md p-4 relative'>
						{/* Ваш список кошельков */}
						<div className='flex flex-col gap-2'>
							{wallets.map(wallet => (
								<div
									key={wallet.id}
									className='border-b border-gray-600 flex items-center justify-between pb-2 crypto-wallet-item flex-col'
								>
									<div className='flex w-full items-center justify-between'>
										<div className='flex flex-col'>
											<p className='font-medium select-none'>{wallet.name}</p>
											<p className='text-sm select-none'>{wallet.address}</p>
										</div>

										<PencilLine
											className='cursor-pointer'
											onClick={() => {
												// Если уже открыт именно этот кошелёк — закрываем;
												// иначе открываем его дроп
												setEditingWalletId(
													editingWalletId === wallet.id ? null : wallet.id
												)
											}}
										/>
									</div>

									{/* Рендерим дроп только для того кошелька, у которого editingWalletId совпадает с wallet.id */}
									{editingWalletId === wallet.id && (
										<WalletEditDrop
											wallet={wallets.find(w => w.id === editingWalletId)!}
										/>
									)}
								</div>
							))}
							{/* Отдельный дроп для редактирования, когда editingWalletId не null */}
							<div className='wallet-create-btn flex items-center justify-center gap-2'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='25'
									height='24'
									viewBox='0 0 25 24'
									fill='none'
								>
									<path
										d='M8.5 12H12.5M12.5 12H16.5M12.5 12V16M12.5 12V8M12.5 21C7.52944 21 3.5 16.9706 3.5 12C3.5 7.02944 7.52944 3 12.5 3C17.4706 3 21.5 7.02944 21.5 12C21.5 16.9706 17.4706 21 12.5 21Z'
										stroke='#97F06D'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
								<p className='text-[#97F06D]'>Create new</p>
							</div>
						</div>
					</div>
				</div>
			</>
		)
}
