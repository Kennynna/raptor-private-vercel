import { useState } from 'react'

import { MenuItem } from '@/shared/menu-item'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import IconQr from '@/shared/icons/qr'
import IconPlane from '@/shared/icons/plane'
import IconChart from '@/shared/icons/chart'
import { SendCrypto } from './send-crypto'

type TokenItem = {
	id: number
	title: string
	amount: string
	icon: string // путь к иконке, например "./ton.svg"
}

export const TabMenu = () => {
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

	// Обработчик "Delete selected"
	const handleDeleteSelected = () => {
		console.log('Удаляем токены с ID:', selectedTokens)
		setSelectedTokens([])
		// Здесь можно сделать запрос на бэкенд для удаления
	}

	// ------------------------------------
	// Состояние для "детального" просмотра в дравере
	// Если null — показываем дефолтный список, если есть токен — показываем детальную вёрстку
	// ------------------------------------
	const [selectedToken, setSelectedToken] = useState<TokenItem | null>(null)

	// Локальное состояние для Amount (значение инпута)
	const [amount, setAmount] = useState<string>('')

	// При клике на Max:
	// 1) «18.63 TON» -> парсим «18.63» (до первого пробела или убираем не-числовые символы)
	// 2) записываем в state
	const handleMaxClick = () => {
		if (!selectedToken) return
		// Предположим, что amount в token.amount — всегда число + пробел + символы (TON, BTC и т.п.)
		// В простом случае:
		const numberPart = parseFloat(selectedToken.amount)
		// Сохраним в состоянии
		setAmount(String(numberPart))
	}

	return (
		<div className='flex justify-between self-stretch gap-1 '>
			<Drawer
				onOpenChange={open => {
					if (!open) {
						setSelectedToken(null)
						// Сбрасываем amount при закрытии
						setAmount('')
					}
				}}
			>
				<DrawerTrigger>
					<MenuItem Icon={IconQr} title={'Receive'} />
				</DrawerTrigger>
				{/* ВАЖНО: делаем flex-колонку, чтобы зафиксировать кнопки внизу */}
				<DrawerContent className='flex flex-col h-screen px-4'>
					<DrawerHeader>
						<DrawerTitle>Receive</DrawerTitle>
					</DrawerHeader>

					{/* Основная часть с прокруткой */}
					<div className='flex-1 overflow-y-auto pb-4'>
						<div className='flex flex-col gap-2 mt-5'>
							{tokens.map(token => (
								<div
									key={token.id}
									className='token-item flex items-center justify-between w-full p-4 bg-[#2A2A2A] rounded-[24px] cursor-pointer'
								>
									<div className={'flex items-center gap-4'}>
										<img src={token.icon} alt='' />
										<div>
											<div className='mb-1 text-white font-black w-[130px] whitespace-nowrap overflow-hidden text-ellipsis'>
												{token.title}
											</div>
											<p className='font-medium text-white opacity-50'>
												{token.amount}
											</p>
										</div>
									</div>
									<button>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
										>
											<path
												d='M9 9V6.2002C9 5.08009 9 4.51962 9.21799 4.0918C9.40973 3.71547 9.71547 3.40973 10.0918 3.21799C10.5196 3 11.0801 3 12.2002 3H17.8002C18.9203 3 19.4801 3 19.9079 3.21799C20.2842 3.40973 20.5905 3.71547 20.7822 4.0918C21.0002 4.51962 21.0002 5.07967 21.0002 6.19978V11.7998C21.0002 12.9199 21.0002 13.48 20.7822 13.9078C20.5905 14.2841 20.2839 14.5905 19.9076 14.7822C19.4802 15 18.921 15 17.8031 15H15M9 9H6.2002C5.08009 9 4.51962 9 4.0918 9.21799C3.71547 9.40973 3.40973 9.71547 3.21799 10.0918C3 10.5196 3 11.0801 3 12.2002V17.8002C3 18.9203 3 19.4801 3.21799 19.9079C3.40973 20.2842 3.71547 20.5905 4.0918 20.7822C4.5192 21 5.07899 21 6.19691 21H11.8036C12.9215 21 13.4805 21 13.9079 20.7822C14.2842 20.5905 14.5905 20.2839 14.7822 19.9076C15 19.4802 15 18.921 15 17.8031V15M9 9H11.8002C12.9203 9 13.4801 9 13.9079 9.21799C14.2842 9.40973 14.5905 9.71547 14.7822 10.0918C15 10.5192 15 11.079 15 12.1969L15 15'
												stroke='#949494'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
										</svg>
									</button>
								</div>
							))}
						</div>
					</div>

					{/* Блок с кнопками внизу */}
					{selectedToken && (
						<div className='p-4 flex items-center justify-between gap-2'>
							<button
								className='bg-[#3B3C40] text-[#FFF] text-[15px] font-bold py-[12px] px-[14px] rounded-full basis-6/12'
								onClick={() => {
									setSelectedToken(null)
									setAmount('')
								}}
							>
								Cancel
							</button>

							<button
								className='bg-[#97F06D] text-[#222] text-[15px] font-bold py-[12px] px-[14px] rounded-full basis-6/12'
								onClick={() => {
									// Здесь можно сделать отправку на бек
									console.log('Send', {
										token: selectedToken.title,
										amount,
									})
									// Сброс
									setSelectedToken(null)
									setAmount('')
								}}
							>
								Send
							</button>
						</div>
					)}
					<DrawerClose>
						<div className={'mb-[30px]'}>
							<Button
								className='bg-[#3B3C40] rounded-[20px] py-[12px] px-[14px] text-white text-[15px] font-semibold text-center w-full'
								onClick={handleDeleteSelected}
							>
								Close
							</Button>
						</div>
					</DrawerClose>
				</DrawerContent>
			</Drawer>

			{/* ------------------------------------
          2) Stats Drawer (пустой пример)
         ------------------------------------ */}
			<Drawer>
				<DrawerTrigger>
					<MenuItem Icon={IconChart} title={'Stats'} />
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>Manage token list</DrawerTitle>
					</DrawerHeader>
				</DrawerContent>
			</Drawer>

			{/* ------------------------------------
          3) Send Drawer
         ------------------------------------ */}
			<Drawer
				onOpenChange={open => {
					if (!open) {
						setSelectedToken(null)
						// Сбрасываем amount при закрытии
						setAmount('')
					}
				}}
			>
				<DrawerTrigger>
					<MenuItem Icon={IconPlane} title={'Send'} />
				</DrawerTrigger>
				{/* ВАЖНО: делаем flex-колонку, чтобы зафиксировать кнопки внизу */}
				<SendCrypto selectedToken={selectedToken} setSelectedToken={setSelectedToken} tokens={tokens} amount={amount} setAmount={setAmount} handleMaxClick={handleMaxClick}handleDeleteSelected={handleDeleteSelected}/>
			</Drawer>
		</div>
	)
}
