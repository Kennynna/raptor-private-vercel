// @ts-ignore
import {
	Drawer,
	DrawerContent,
	DrawerTrigger,
} from '@/components/ui/drawer.tsx'

import { useState } from 'react'
import { SearchIcon, SettingIcon } from '@/shared/icons/for-logic'
import { SearchToken } from './search-token'
import { TonIconBig } from '@/shared/icons/ton'
import { ManageTokenList } from './manege-token-list'

type TokenItem = {
	id: number
	title: string
	amount: string
	icon: string // путь к иконке, например "./ton.svg"
}

export const TokenTable = () => {
	// Храним активный таб
	const [activeTab, setActiveTab] = useState<
		'all' | 'favorite' | 'oneDollar' | 'deleted'
	>('all')

	// Режим удаления
	const [deleteMode, setDeleteMode] = useState(false)

	const [tokens] = useState<TokenItem[]>([
		{
			id: 1,
			title: 'The Open Network авыавфываыф',
			amount: '18.63 TON',
			icon: './ton.svg',
		},
		{
			id: 2,
			title: 'Another Token',
			amount: '50.00 ATK',
			icon: './ton.svg',
		},
		// Дополнительные токены
		{
			id: 3,
			title: 'Bitcoin',
			amount: '0.5 BTC',
			icon: './ton.svg',
		},
		{
			id: 4,
			title: 'Ethereum',
			amount: '2.0 ETH',
			icon: './ton.svg',
		},
		{
			id: 5,
			title: 'Ripple',
			amount: '1000 XRP',
			icon: './ton.svg',
		},
		{
			id: 6,
			title: 'Litecoin',
			amount: '10 LTC',
			icon: './ton.svg',
		},
		{
			id: 7,
			title: 'Cardano',
			amount: '500 ADA',
			icon: './ton.svg',
		},
		{
			id: 8,
			title: 'Polkadot',
			amount: '300 DOT',
			icon: './ton.svg',
		},
		{
			id: 9,
			title: 'Dogecoin',
			amount: '10000 DOGE',
			icon: './ton.svg',
		},
		{
			id: 10,
			title: 'Chainlink',
			amount: '250 LINK',
			icon: './ton.svg',
		},
	])

	// Список ID выбранных токенов (для режима удаления)
	const [selectedTokens, setSelectedTokens] = useState<number[]>([])

	// Список ID избранных токенов
	const [favoriteTokens, setFavoriteTokens] = useState<number[]>([])

	// Список ID закрепленных токенов
	const [pinnedTokens, setPinnedTokens] = useState<number[]>([])

	const TabContent = () => {
		switch (activeTab) {
			case 'all':
				return (
					<>
						<TokenCard />
						<TokenCard />
						<TokenCard />
					</>
				)
			case 'favorite':
				return <>favorite</>
			case 'oneDollar':
				return <>oneDollar</>
			case 'deleted':
				return <>deleted</>
			default:
				return (
					<>
						<TokenCard />
						<TokenCard />
						<TokenCard />
					</>
				)
		}
	}

	// ---
	// При клике на "удаление"
	const handleToggleDelete = () => {
		setDeleteMode(prev => !prev)
		if (deleteMode) {
			setSelectedTokens([])
		}
	}

	// Обработчик выбора конкретного токена в режиме удаления
	const handleSelectToken = (id: number) => {
		setSelectedTokens(prev =>
			prev.includes(id) ? prev.filter(tid => tid !== id) : [...prev, id]
		)
	}

	// Обработчик "Delete selected"
	const handleDeleteSelected = () => {
		console.log('Удаляем токены с ID:', selectedTokens)
		setSelectedTokens([])
		// Здесь можно сделать запрос на бэкенд для удаления
	}

	// Обработчик "Добавить/убрать из избранного"
	const handleToggleFavorite = (tokenId: number) => {
		setFavoriteTokens(prev => {
			if (prev.includes(tokenId)) {
				return prev.filter(id => id !== tokenId)
			}
			return [...prev, tokenId]
		})
	}

	// Обработчик "Закрепить/открепить токен"
	const handleTogglePin = (tokenId: number) => {
		setPinnedTokens(prev => {
			if (prev.includes(tokenId)) {
				return prev.filter(id => id !== tokenId)
			}
			return [...prev, tokenId]
		})
	}

	// Сортировка токенов: закрепленные идут первыми
	const sortedTokens = [...tokens].sort((a, b) => {
		const aPinned = pinnedTokens.includes(a.id) ? 0 : 1
		const bPinned = pinnedTokens.includes(b.id) ? 0 : 1
		return aPinned - bPinned
	})

	// ------------------------------------
	// Состояние для "детального" просмотра в дравере
	// Если null — показываем дефолтный список, если есть токен — показываем детальную вёрстку
	// ------------------------------------

	return (
		<div className=' flex flex-col flex-1 mb-4 relative z-20'>
			{/* nav */}
			<div className='w-full flex gap-2 text-[14px] font-black justify-between token-table items-center mb-2'>
				{/* Drawer для управления списком токенов */}
				<Drawer
					onOpenChange={open => {
						if (!open) {
							setDeleteMode(false)
							setSelectedTokens([])
						}
					}}
				>
					<DrawerTrigger>
						<SettingIcon />
					</DrawerTrigger>

					<DrawerContent className=' px-4 flex flex-col h-screen'>
						<ManageTokenList
							activeTab={activeTab}
							setActiveTab={setActiveTab}
							handleToggleDelete={handleToggleDelete}
							sortedTokens={sortedTokens}
							selectedTokens={selectedTokens}
							favoriteTokens={favoriteTokens}
							deleteMode={deleteMode}
							pinnedTokens={pinnedTokens}
							handleTogglePin={handleTogglePin}
							handleToggleFavorite={handleToggleFavorite}
							handleSelectToken={handleSelectToken}
							handleDeleteSelected={handleDeleteSelected}
						/>
					</DrawerContent>
				</Drawer>

				{/* Второй набор "табы" (навигация), теперь с логикой переключения */}
				<div className='flex items-center gap-2'>
					<p
						onClick={() => setActiveTab('all')}
						className={
							activeTab === 'all'
								? 'opacity-100 rounded-[24px] bg-[#2A2A2A] border border-[rgba(255,255,255,0.05)] px-[12px] py-[8px] text-[14px] font-black text-white whitespace-nowrap'
								: 'opacity-50 px-[12px] py-[8px] text-[14px] font-black text-white whitespace-nowrap'
						}
					>
						All Tokens
					</p>

					<p
						onClick={() => setActiveTab('favorite')}
						className={
							activeTab === 'favorite'
								? 'opacity-100 rounded-[24px] bg-[#2A2A2A] border border-[rgba(255,255,255,0.05)] px-[12px] py-[8px] text-[14px] font-black text-white'
								: 'opacity-50 px-[12px] py-[8px] text-[14px] font-black text-white'
						}
					>
						Favorite
					</p>

					<p
						onClick={() => setActiveTab('oneDollar')}
						className={
							activeTab === 'oneDollar'
								? 'opacity-100 rounded-[24px] bg-[#2A2A2A] border border-[rgba(255,255,255,0.05)] px-[12px] py-[8px] text-[14px] font-black text-white'
								: 'opacity-50 px-[12px] py-[8px] text-[14px] font-black text-white'
						}
					>
						{'<1$'}
					</p>

					<p
						onClick={() => setActiveTab('deleted')}
						className={
							activeTab === 'deleted'
								? 'opacity-100 rounded-[24px] bg-[#2A2A2A] border border-[rgba(255,255,255,0.05)] px-[12px] py-[8px] text-[14px] font-black text-white'
								: 'opacity-50 px-[12px] py-[8px] text-[14px] font-black text-white'
						}
					>
						Deleted
					</p>
				</div>
				<Drawer>
					<DrawerTrigger>
						<SearchIcon />
					</DrawerTrigger>
					<DrawerContent className='overflow-hidden flex flex-col'>
						<SearchToken />
					</DrawerContent>
				</Drawer>
			</div>

			{/* Далее, после навигации */}
			<div className='flex flex-col gap-2 w-full overflow-auto max-h-[256px]'>
				{TabContent()}
			</div>
		</div>
	)
}

export const TokenCard = () => {
	return (
		<div className='flex gap-4 items-center w-full bg-[var(--gray)] p-4 rounded-[24px]'>
			{/* icon */}
			<TonIconBig />
			{/* center */}
			<div className='flex flex-col text-start flex-1'>
				<p className='text-[16px] font-black'>The Open Network</p>
				<p className='text-[16px] font-medium opacity-50'>
					7.3$ <span className='text-[var(--green)]'>+15.32%</span>
				</p>
			</div>
			{/* end */}
			<div className='flex flex-col self-end'>
				<p className='text-[16px] font-black'>18.63 TON</p>
				<p className='text-[16px] font-medium opacity-50'>136.15$</p>
			</div>
		</div>
	)
}
