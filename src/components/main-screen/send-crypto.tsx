// @ts-ignore
import {
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
} from '../ui/drawer'
import { Button } from '../ui/button'

export const SendCrypto = ({
	selectedToken,
	setSelectedToken,
	tokens,
	amount,
	setAmount,
	handleMaxClick,
	handleDeleteSelected,
}) => {
	return (
		<DrawerContent className='flex flex-col h-screen px-4'>
			<DrawerHeader>
				<DrawerTitle>Send crypto</DrawerTitle>
			</DrawerHeader>

			{/* Основная часть с прокруткой */}
			<div className='flex-1 overflow-y-auto pb-4'>
				{/* Если токен НЕ выбран, показываем список */}
				{!selectedToken && (
					<div className='flex flex-col gap-2 mt-5'>
						{tokens.map(token => (
							<div
								key={token.id}
								className='token-item flex items-center w-full p-4 bg-[#2A2A2A] rounded-[24px] gap-4 cursor-pointer'
								onClick={() => {
									setSelectedToken(token)
									// При новом выборе сбрасываем previous amount
									setAmount('')
								}}
							>
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
						))}
					</div>
				)}

				{/* Если токен выбран, показываем его «детальный» контент */}
				{selectedToken && (
					<div className='mt-5 text-white'>
						<img
							className='w-[96px] h-[96px] block mx-auto'
							src={selectedToken.icon}
							alt=''
						/>

						<div className='text-white font-black whitespace-nowrap overflow-hidden text-ellipsis mt-[16px] mb-[32px] block mx-auto text-center w-full'>
							Send {selectedToken.title}
						</div>

						{/* Адрес получателя */}
						<input
							className='opacity-50 w-full bg-[#2A2A2A] rounded-[12px] text-white p-[16px]'
							placeholder="Recipient's TON address"
							type='text'
						/>

						{/* Поле Amount + кнопка Max */}
						<div className='amount-input relative w-full mt-[16px]'>
							<input
								type='text'
								placeholder='Amount'
								className='
                      w-full
                      bg-[#2A2A2A]
                      rounded-[12px]
                      p-[16px]
                      text-white
                      opacity-50
                      pr-[100px]   /* Чтобы текст не налезал на блок справа */
                    '
								value={amount}
								onChange={e => setAmount(e.target.value)}
							/>

							{/* Блок, который будет поверх инпута (справа) */}
							<div
								className='
                      absolute
                      right-3
                      top-1/2
                      -translate-y-1/2
                      flex
                      items-center
                      space-x-2
                      text-[#909090]
                    '
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									viewBox='0 0 16 16'
									fill='none'
								>
									<path
										d='M11.25 2.03135C11.3281 2.01182 11.4082 2.00205 11.4844 2.0001C12.0215 1.99229 12.5 2.4376 12.5 3.0001V4.0001H11.5V3.0001L5.8125 4.5001H12.5C13.3223 4.5001 14 5.17784 14 6.0001V12.5001C14 13.3224 13.3223 14.0001 12.5 14.0001H3.5C2.67773 14.0001 2 13.3224 2 12.5001V5.6251C2 4.94541 2.46875 4.34385 3.125 4.17198L11.25 2.03135ZM10.5 9.2501C10.5 8.83604 10.8359 8.5001 11.25 8.5001C11.6641 8.5001 12 8.83604 12 9.2501C12 9.66416 11.6641 10.0001 11.25 10.0001C10.8359 10.0001 10.5 9.66416 10.5 9.2501Z'
										fill='#909090'
									/>
									<path
										d='M11.25 2.03135C11.3281 2.01182 11.4082 2.00205 11.4844 2.0001C12.0215 1.99229 12.5 2.4376 12.5 3.0001V4.0001H11.5V3.0001L5.8125 4.5001H12.5C13.3223 4.5001 14 5.17784 14 6.0001V12.5001C14 13.3224 13.3223 14.0001 12.5 14.0001H3.5C2.67773 14.0001 2 13.3224 2 12.5001V5.6251C2 4.94541 2.46875 4.34385 3.125 4.17198L11.25 2.03135ZM10.5 9.2501C10.5 8.83604 10.8359 8.5001 11.25 8.5001C11.6641 8.5001 12 8.83604 12 9.2501C12 9.66416 11.6641 10.0001 11.25 10.0001C10.8359 10.0001 10.5 9.66416 10.5 9.2501Z'
										stroke='#909090'
									/>
								</svg>

								<span className='text-white'>
									{/* Отобразим остаток из selectedToken */}
									{selectedToken.amount}
								</span>

								<button
									className='
                        text-sm
                        font-semibold
                        bg-[#3A3A3A]
                        py-1
                        px-2
                        rounded
                        hover:bg-[#4A4A4A]
                        active:bg-[#2A2A2A]
                        text-white
                      '
									onClick={handleMaxClick}
								>
									Max
								</button>
							</div>
						</div>

						<div
							className={
								'mt-[16px] flex items-center justify-between text-white font-medium text-[12px] opacity-50'
							}
						>
							<p>$0.00</p>
							<p>Transaction fee = 0.1 TON</p>
						</div>
					</div>
				)}
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
	)
}
