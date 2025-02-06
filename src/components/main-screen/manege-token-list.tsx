import {
	CheckBoxSelect,
	DeleteIcon,
	FixIcon,
	StarIcon,
} from '@/shared/icons/for-logic'
import { DrawerHeader, DrawerTitle } from '../ui/drawer'
import { DialogDemo } from '@/shared/modal'
import { Button } from '../ui/button'

type TokenItem = {
	id: number
	title: string
	amount: string
	icon: string
}

interface ManageTokenListProps {
	activeTab: string
	setActiveTab: (tab: 'all' | 'favorite' | 'oneDollar' | 'deleted') => void
	handleToggleDelete: () => void
	sortedTokens: TokenItem[]
	selectedTokens: number[]
	favoriteTokens: number[]
	deleteMode: boolean
	pinnedTokens: number[]
	handleTogglePin: (tokenId: number) => void
	handleToggleFavorite: (tokenId: number) => void
	handleSelectToken: (id: number) => void
	handleDeleteSelected: () => void
}
export const ManageTokenList = ({
	setActiveTab,
	handleToggleDelete,
	handleTogglePin,
	handleToggleFavorite,
	activeTab,
	sortedTokens,
	selectedTokens,
	favoriteTokens,
	deleteMode,
	pinnedTokens,
	handleDeleteSelected,
	handleSelectToken,
}: ManageTokenListProps) => {
	return (
		<>
			<DrawerHeader>
				<DrawerTitle>Manage token list</DrawerTitle>
			</DrawerHeader>

			<div className='flex-1 overflow-y-auto pb-4'>
				{/* Кнопки для переключения табов (первые) */}
				<div className='flex items-center justify-between'>
					<div className='flex items-center'>
						<button
							onClick={() => setActiveTab('all')}
							className={
								(activeTab === 'all'
									? 'opacity-100 rounded-[24px] bg-[#2A2A2A] border border-[rgba(255,255,255,0.05)]'
									: 'opacity-50') +
								' px-[12px] py-[8px] text-[14px] font-black text-white'
							}
						>
							All tokens
						</button>

						<button
							onClick={() => setActiveTab('favorite')}
							className={
								(activeTab === 'favorite'
									? 'opacity-100 rounded-[24px] bg-[#2A2A2A] border border-[rgba(255,255,255,0.05)]'
									: 'opacity-50') +
								' px-[12px] py-[8px] text-[14px] font-black text-white'
							}
						>
							Favorite
						</button>

						<button
							onClick={() => setActiveTab('oneDollar')}
							className={
								(activeTab === 'oneDollar'
									? 'opacity-100 rounded-[24px] bg-[#2A2A2A] border border-[rgba(255,255,255,0.05)]'
									: 'opacity-50') +
								' px-[12px] py-[8px] text-[14px] font-black text-white'
							}
						>
							&lt;1$
						</button>
					</div>

					{/* Кнопка включения/выключения режима удаления */}

					<button className='turn-on-delete' onClick={handleToggleDelete}>
						{deleteMode ? (
							<DeleteIcon isDelete={true} />
						) : (
							<DeleteIcon isDelete={false} />
						)}
					</button>
				</div>

				{/* В зависимости от активного таба (отображаем список токенов) */}
				{activeTab === 'all' && (
					<div className='flex flex-col gap-2 mt-5'>
						{sortedTokens.map(token => {
							const isSelected = selectedTokens.includes(token.id)
							const isFavorite = favoriteTokens.includes(token.id)
							const isPinned = pinnedTokens.includes(token.id)

							return (
								<div
									key={token.id}
									className='flex items-center w-full justify-between p-4 bg-[#2A2A2A] rounded-[24px]'
								>
									<div className='flex items-center gap-4'>
										<img src={token.icon || '/placeholder.svg'} alt='' />
										<div>
											<div className='mb-1 text-white font-black w-[130px] whitespace-nowrap overflow-hidden text-ellipsis'>
												{token.title}
											</div>
											<p className='font-medium text-white opacity-50'>
												{token.amount}
											</p>
										</div>
									</div>

									{!deleteMode ? (
										<div className='flex items-center gap-3'>
											{/* pin-btn */}
											<button onClick={() => handleTogglePin(token.id)}>
												{isPinned ? (
													<FixIcon fixed={true} />
												) : (
													<FixIcon fixed={false} />
												)}
											</button>

											{/* favorite-btn */}
											<button onClick={() => handleToggleFavorite(token.id)}>
												{isFavorite ? (
													<StarIcon favorited={true} />
												) : (
													<StarIcon favorited={false} />
												)}
											</button>

											{/* drag-btn */}
											<button>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='24'
													height='24'
													viewBox='0 0 24 24'
													fill='none'
												>
													<path
														d='M5 17H19M5 12H19M5 7H19'
														stroke='#4D4D4D'
														strokeWidth='2'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
												</svg>
											</button>
										</div>
									) : (
										<button onClick={() => handleSelectToken(token.id)}>
											{isSelected ? (
												<CheckBoxSelect select={true} />
											) : (
												<CheckBoxSelect select={false} />
											)}
										</button>
									)}
								</div>
							)
						})}
					</div>
				)}

				{activeTab === 'favorite' && (
					<div className='mt-6 text-white'>
						<p>Здесь может быть список избранных токенов</p>
					</div>
				)}

				{activeTab === 'oneDollar' && (
					<div className='mt-6 text-white'>
						<p>Здесь может быть список токенов, стоящих 1$</p>
					</div>
				)}
			</div>

			{/* Кнопка "Save" или "Delete selected" */}
			<div className={'mb-[30px]'}>
				{!deleteMode ? (
					<Button className='bg-[#97F06D] rounded-[20px] py-[12px] px-[14px] text-[#222] text-[15px] font-semibold text-center w-full'>
						Save
					</Button>
				) : (
					<DialogDemo>
						<Button
							className='bg-[#97F06D] rounded-[20px] py-[12px] px-[14px] text-[#222] text-[15px] font-semibold text-center w-full'
							onClick={handleDeleteSelected}
						>
							Delete selected
						</Button>
					</DialogDemo>
				)}
			</div>
		</>
	)
}
