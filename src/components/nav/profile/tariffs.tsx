// @ts-ignore
import { InterfaceIcon } from './icon/interface'
import { PlaneIcon } from './icon/plane'
import { StarIcon } from './icon/star'
import { TimeIcon } from './icon/time'
import { TonSymbolIcon } from './icon/ton-symbol'

export const Tariffs = () => {
	return (
		<div className='p-4'>
			<p className='text-[24px] font-black mb-4'>Tariffs</p>

			<div className='p-4 bg-[var(--gray)] rounded-[20px] flex flex-col gap-2 tariffs-free'>
				<p className='font-black'>Free</p>
				<div className='flex items-center gap-1'>
					<TimeIcon />
					<p className='font-bold text-[15px]'>4 delayed orders per token</p>
				</div>
				<div className='flex items-center gap-1'>
					<InterfaceIcon />
					<p className='font-bold text-[15px]'>3 adresses in Copytrading</p>
				</div>
				<div className='flex items-center gap-1'>
					<PlaneIcon />
					<p className='font-bold text-[15px]'>3 channels in Call Sniper</p>
				</div>

				<button className='flex items-center justify-center p-3 bg-[#3B3C40] rounded-[20px] w-full mt-0.5 font-bold text-[15px] text-[#E6E6E6]'>
					Current Tariff
				</button>
			</div>

			<div className='p-4 bg-[var(--gray)] rounded-[20px] flex flex-col gap-2 tariffs-vip mt-4'>
				<p className='font-black'>VIP</p>
				<div className='flex items-center gap-1'>
					<TimeIcon color='#97F06D' />
					<span className='text-[#97F06D]'>Infinite</span>
					<p className='font-bold text-[15px]'>4 delayed orders per token</p>
				</div>
				<div className='flex items-center gap-1'>
					<InterfaceIcon color='#97F06D' />
					<span className='text-[#97F06D]'>Infinite</span>
					<p className='font-bold text-[15px]'>3 adresses in Copytrading</p>
					<span className='text-[#97F06D]'>Copytrading</span>
				</div>
				<div className='flex items-center gap-1'>
					<PlaneIcon color='#97F06D' />
					<p className='font-bold text-[15px]'>
						<span className='text-[#97F06D]'>Infinite</span>3 channels in Call
						Sniper <span className='text-[#97F06D]'>Call Snipe</span>
					</p>
				</div>

				<button className='flex items-center justify-center p-3 bg-[#97F06D] rounded-[20px] w-full mt-0.5 font-bold text-[15px] text-[#000]'>
					Buy for 750 ⭐️
				</button>
			</div>

			<div className='p-4 bg-[var(--gray)] rounded-[20px] flex flex-col gap-2 tariffs-free mt-4 mb-10 opacity-60'>
				<p className='font-black'>How to buy</p>
				<div className='flex items-center gap-1'>
					<StarIcon />
					<p className='font-bold text-[15px]'>Via @PremiumBot, using /stars</p>
				</div>
				<div className='flex items-center gap-1'>
					<TonSymbolIcon />
					<p className='font-bold text-[15px]'>On Fragment with TON</p>
				</div>
				<div className='flex items-center gap-1'>
					<PlaneIcon />
					<p className='font-bold text-[15px]'>In Telegram settings</p>
				</div>
			</div>
		</div>
	)
}
