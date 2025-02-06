// @ts-ignore
import { TonIcon } from '@/shared/icons/ton'
import { BellIcon } from './icons/bell'
import { CopyIcon } from '@/shared/icons/for-logic/copy'
import { World } from './icons/world'
import { Twitter } from './icons/twitter'
import { Telegram } from './icons/telegram'
import { ChartIcon } from './icons/chart'

export const ResearchMain = () => {
	return (
		<div className='p-4 '>
			<div className='flex w-full items-center justify-between gap-1 mb-8'>
				<div className='title flex items-center'>
					<p className='text-[24px] '>Research</p>
					<BellIcon />
				</div>
				<div className='title flex item-center'>
					<TonIcon />
					<p className=' '>Research</p>
				</div>
			</div>

			<div className='research-main-block-item text-[14px] mb-6'>
				{/* header text */}
				<div className='flex item-center justify-between w-full gap-1'>
					<p className='text-[16px] font-bold'>
						12min ago!
						<span className='text-[12px] text-[#999] font-medium ml-1'>
							Pair created
						</span>
					</p>
					<div className='flex gap-1 text-[10px] font-bold'>
						<span className='research-header-right-number'>#1</span>
						<span className='research-header-right-new'>NEW</span>
					</div>
				</div>
				{/* content */}

				<div className='research-main-content-block'>
					{/* первый ряд */}
					<div className=' flex justify-between gap-1'>
						<div className='research-main-content-first flex items-center gap-1'>
							<div className='rounded-full overflow-hidden'>
								<img
									src='https://avatars.mds.yandex.net/i?id=c9cd3f9658fb773142602e28e9495a37_sr-10814916-images-thumbs&n=13'
									alt=''
									width={40}
									height={40}
								/>
							</div>
							<div className='flex-1'>
								<div className='flex items-center justify-between'>
									<p className='text-[#F1CC2B] font-semibold '>#1</p>
									<CopyIcon />
								</div>
								<p className='text-[16px] font-bold'>SPeculatoR</p>
							</div>
						</div>
						<div className='research-main-content-first flex flex-col justify-between'>
							<p className='text-[#999]'>Price</p>
							<p className='text-[16px] font-bold'>
								0.329$ <span className='text-[var(--green)] ml-2'>+7.21%</span>
							</p>
						</div>
					</div>

					{/* второй ряд */}

					<div className=' flex justify-between gap-1'>
						<div className='research-main-content-first flex flex-col justify-between'>
							<p className='text-[#999]'>Mkt cap</p>
							<p className='text-[16px] font-bold'>$32.9 M</p>
						</div>
						<div className='research-main-content-first flex flex-col justify-between'>
							<p className='text-[#999]'>Liquidity</p>
							<p className='text-[16px] font-bold'>$1 000 000</p>
						</div>
					</div>

					{/* третий ряд */}
					<div className=' flex  gap-1 text-[#999] items-stretch'>
						<div className='research-main-content-third flex items-center gap-1 flex-1 justify-center '>
							<World /> <p>Website</p>
						</div>
						<div className='research-main-content-third flex items-center gap-1  flex-1 justify-center'>
							<Twitter /> <p>Twitter</p>
						</div>
						<div className='research-main-content-third flex items-center gap-1 flex-1 justify-center'>
							<Telegram /> <p>Telegram</p>
						</div>
					</div>
				</div>
				{/* Кнопки нижние */}
				<div className='flex items-center gap-2 mt-2 w-full'>
					<button className='research-main-btn flex-1 text-[17px] font-bold text-[var(--green)]'>
						Swap
					</button>
					<div className='rounded-full bg-[#3B3C40] py-3 px-3'>
						<ChartIcon />
					</div>
				</div>
			</div>
			<div className='research-main-block-item text-[14px] mb-6'>
				{/* header text */}
				<div className='flex item-center justify-between w-full gap-1'>
					<p className='text-[16px] font-bold'>
						12min ago!
						<span className='text-[12px] text-[#999] font-medium ml-1'>
							Pair created
						</span>
					</p>
					<div className='flex gap-1 text-[10px] font-bold'>
						<span className='research-header-right-number'>#1</span>
						<span className='research-header-right-new'>NEW</span>
					</div>
				</div>
				{/* content */}

				<div className='research-main-content-block'>
					{/* первый ряд */}
					<div className=' flex justify-between gap-1'>
						<div className='research-main-content-first flex items-center gap-1'>
							<div className='rounded-full overflow-hidden'>
								<img
									src='https://avatars.mds.yandex.net/i?id=c9cd3f9658fb773142602e28e9495a37_sr-10814916-images-thumbs&n=13'
									alt=''
									width={40}
									height={40}
								/>
							</div>
							<div className='flex-1'>
								<div className='flex items-center justify-between'>
									<p className='text-[#F1CC2B] font-semibold '>#1</p>
									<CopyIcon />
								</div>
								<p className='text-[16px] font-bold'>SPeculatoR</p>
							</div>
						</div>
						<div className='research-main-content-first flex flex-col justify-between'>
							<p className='text-[#999]'>Price</p>
							<p className='text-[16px] font-bold'>
								0.329$ <span className='text-[var(--green)] ml-2'>+7.21%</span>
							</p>
						</div>
					</div>

					{/* второй ряд */}

					<div className=' flex justify-between gap-1'>
						<div className='research-main-content-first flex flex-col justify-between'>
							<p className='text-[#999]'>Mkt cap</p>
							<p className='text-[16px] font-bold'>$32.9 M</p>
						</div>
						<div className='research-main-content-first flex flex-col justify-between'>
							<p className='text-[#999]'>Liquidity</p>
							<p className='text-[16px] font-bold'>$1 000 000</p>
						</div>
					</div>

					{/* третий ряд */}
					<div className=' flex  gap-1 text-[#999] items-stretch'>
						<div className='research-main-content-third flex items-center gap-1 flex-1 justify-center '>
							<World /> <p>Website</p>
						</div>
						<div className='research-main-content-third flex items-center gap-1  flex-1 justify-center'>
							<Twitter /> <p>Twitter</p>
						</div>
						<div className='research-main-content-third flex items-center gap-1 flex-1 justify-center'>
							<Telegram /> <p>Telegram</p>
						</div>
					</div>
				</div>
				{/* Кнопки нижние */}
				<div className='flex items-center gap-2 mt-2 w-full'>
					<button className='research-main-btn flex-1 text-[17px] font-bold text-[var(--green)]'>
						Swap
					</button>
					<div className='rounded-full bg-[#3B3C40] py-3 px-3'>
						<ChartIcon />
					</div>
				</div>
			</div>
			<div className='research-main-block-item text-[14px] mb-6'>
				{/* header text */}
				<div className='flex item-center justify-between w-full gap-1'>
					<p className='text-[16px] font-bold'>
						12min ago!
						<span className='text-[12px] text-[#999] font-medium ml-1'>
							Pair created
						</span>
					</p>
					<div className='flex gap-1 text-[10px] font-bold'>
						<span className='research-header-right-number'>#1</span>
						<span className='research-header-right-new'>NEW</span>
					</div>
				</div>
				{/* content */}

				<div className='research-main-content-block'>
					{/* первый ряд */}
					<div className=' flex justify-between gap-1'>
						<div className='research-main-content-first flex items-center gap-1'>
							<div className='rounded-full overflow-hidden'>
								<img
									src='https://avatars.mds.yandex.net/i?id=c9cd3f9658fb773142602e28e9495a37_sr-10814916-images-thumbs&n=13'
									alt=''
									width={40}
									height={40}
								/>
							</div>
							<div className='flex-1'>
								<div className='flex items-center justify-between'>
									<p className='text-[#F1CC2B] font-semibold '>#1</p>
									<CopyIcon />
								</div>
								<p className='text-[16px] font-bold'>SPeculatoR</p>
							</div>
						</div>
						<div className='research-main-content-first flex flex-col justify-between'>
							<p className='text-[#999]'>Price</p>
							<p className='text-[16px] font-bold'>
								0.329$ <span className='text-[var(--green)] ml-2'>+7.21%</span>
							</p>
						</div>
					</div>

					{/* второй ряд */}

					<div className=' flex justify-between gap-1'>
						<div className='research-main-content-first flex flex-col justify-between'>
							<p className='text-[#999]'>Mkt cap</p>
							<p className='text-[16px] font-bold'>$32.9 M</p>
						</div>
						<div className='research-main-content-first flex flex-col justify-between'>
							<p className='text-[#999]'>Liquidity</p>
							<p className='text-[16px] font-bold'>$1 000 000</p>
						</div>
					</div>

					{/* третий ряд */}
					<div className=' flex  gap-1 text-[#999] items-stretch'>
						<div className='research-main-content-third flex items-center gap-1 flex-1 justify-center '>
							<World /> <p>Website</p>
						</div>
						<div className='research-main-content-third flex items-center gap-1  flex-1 justify-center'>
							<Twitter /> <p>Twitter</p>
						</div>
						<div className='research-main-content-third flex items-center gap-1 flex-1 justify-center'>
							<Telegram /> <p>Telegram</p>
						</div>
					</div>
				</div>
				{/* Кнопки нижние */}
				<div className='flex items-center gap-2 mt-2 w-full'>
					<button className='research-main-btn flex-1 text-[17px] font-bold text-[var(--green)]'>
						Swap
					</button>
					<div className='rounded-full bg-[#3B3C40] py-3 px-3'>
						<ChartIcon />
					</div>
				</div>
			</div>
			<div className='research-main-block-item text-[14px] mb-6'>
				{/* header text */}
				<div className='flex item-center justify-between w-full gap-1'>
					<p className='text-[16px] font-bold'>
						12min ago!
						<span className='text-[12px] text-[#999] font-medium ml-1'>
							Pair created
						</span>
					</p>
					<div className='flex gap-1 text-[10px] font-bold'>
						<span className='research-header-right-number'>#1</span>
						<span className='research-header-right-new'>NEW</span>
					</div>
				</div>
				{/* content */}

				<div className='research-main-content-block'>
					{/* первый ряд */}
					<div className=' flex justify-between gap-1'>
						<div className='research-main-content-first flex items-center gap-1'>
							<div className='rounded-full overflow-hidden'>
								<img
									src='https://avatars.mds.yandex.net/i?id=c9cd3f9658fb773142602e28e9495a37_sr-10814916-images-thumbs&n=13'
									alt=''
									width={40}
									height={40}
								/>
							</div>
							<div className='flex-1'>
								<div className='flex items-center justify-between'>
									<p className='text-[#F1CC2B] font-semibold '>#1</p>
									<CopyIcon />
								</div>
								<p className='text-[16px] font-bold'>SPeculatoR</p>
							</div>
						</div>
						<div className='research-main-content-first flex flex-col justify-between'>
							<p className='text-[#999]'>Price</p>
							<p className='text-[16px] font-bold'>
								0.329$ <span className='text-[var(--green)] ml-2'>+7.21%</span>
							</p>
						</div>
					</div>

					{/* второй ряд */}

					<div className=' flex justify-between gap-1'>
						<div className='research-main-content-first flex flex-col justify-between'>
							<p className='text-[#999]'>Mkt cap</p>
							<p className='text-[16px] font-bold'>$32.9 M</p>
						</div>
						<div className='research-main-content-first flex flex-col justify-between'>
							<p className='text-[#999]'>Liquidity</p>
							<p className='text-[16px] font-bold'>$1 000 000</p>
						</div>
					</div>

					{/* третий ряд */}
					<div className=' flex  gap-1 text-[#999] items-stretch'>
						<div className='research-main-content-third flex items-center gap-1 flex-1 justify-center '>
							<World /> <p>Website</p>
						</div>
						<div className='research-main-content-third flex items-center gap-1  flex-1 justify-center'>
							<Twitter /> <p>Twitter</p>
						</div>
						<div className='research-main-content-third flex items-center gap-1 flex-1 justify-center'>
							<Telegram /> <p>Telegram</p>
						</div>
					</div>
				</div>
				{/* Кнопки нижние */}
				<div className='flex items-center gap-2 mt-2 w-full'>
					<button className='research-main-btn flex-1 text-[17px] font-bold text-[var(--green)]'>
						Swap
					</button>
					<div className='rounded-full bg-[#3B3C40] py-3 px-3'>
						<ChartIcon />
					</div>
				</div>
			</div>
		</div>
	)
}
