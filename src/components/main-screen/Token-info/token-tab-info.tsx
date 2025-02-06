import { Telegram } from '@/components/nav/research/icons/telegram'
import { Twitter } from '@/components/nav/research/icons/twitter'
import { World } from '@/components/nav/research/icons/world'
import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
	className?: string
}

export const TokenTabInfo: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('mt-8 w-full', className)}>
			<div className='flex flex-col gap-1 w-full items-stretch'>
				{/* first Raw */}
				<div className='flex items-stretch gap-1 w-full'>
					<div className='bg-[var(--gray)] px-4 py-2 rounded-[8px] w-1/2'>
						<p className='mb-1 text-[14px] font-medium opacity-50'>Price</p>
						<p className='font-bold'>
							0.329$ <span className='text-[var(--green)] ml-2'>+7.21%</span>
						</p>
					</div>

					<div className='bg-[var(--gray)] px-4 py-2 rounded-[8px] w-1/2'>
						<p className='mb-1 text-[14px] font-medium opacity-50'>Mkt cap</p>
						<p>
							0.329$ <span>$32.9 M</span>
						</p>
					</div>
				</div>

				{/* second Raw */}
				<div className='flex items-stretch gap-1 w-full'>
					<div className='bg-[var(--gray)] px-4 py-2 rounded-[8px] w-1/2'>
						<p className='mb-1 text-[14px] font-medium opacity-50'>
							Pair created
						</p>
						<p className='font-bold'>11 mo 15d</p>
					</div>

					<div className='flex gap-1 flex-1 l w-1/2'>
						<div className='bg-[var(--gray)] px-4 py-2 rounded-[8px] w-full flex-1'>
							<p className='mb-1 text-[14px] font-medium opacity-50'>Supply</p>
							<p className='font-bold'>100 M</p>
						</div>
						<div className='bg-[var(--gray)] px-4 py-2 rounded-[8px] w-full flex-1'>
							<p className='mb-1 text-[14px] font-medium opacity-50'>
								Liquidity
							</p>
							<p className='font-bold'>$1 M</p>
						</div>
					</div>
				</div>

				{/* Third Raw */}
				<div className=' flex  gap-1 text-[#999] items-stretch '>
					<div className='py-3 px-3 flex items-center gap-1 flex-1 justify-center bg-[var(--gray)] rounded-[8px]'>
						<World color='#999999' /> <p>Website</p>
					</div>
					<div className='py-3 px-3 flex items-center gap-1  flex-1 justify-center bg-[var(--gray)] rounded-[8px]'>
						<Twitter color='#999999' /> <p>Twitter</p>
					</div>
					<div className='py-3 px-3 flex items-center gap-1 flex-1 justify-center bg-[var(--gray)] rounded-[8px]'>
						<Telegram color='#999999' /> <p>Telegram</p>
					</div>
				</div>

				{/* Fourth Raw */}
				<p className='mt-2 mb-2'>What do you think about REDO?</p>

				<div className='flex w-full items-stretch gap-1 text-center mb-2'>
					<p className='px-[14px] py-3 bg-[var(--gray)] rounded-[8px] flex-1 border border-[var(--border-green)]'>
						🚀
					</p>
					<p className='px-[14px] py-3 bg-[var(--gray)] rounded-[8px] flex-1 border border-[var(--border-black)]'>
						🔥
					</p>
					<p className='px-[14px] py-3 bg-[var(--gray)] rounded-[8px] flex-1 border border-[var(--border-black)]'>
						💩
					</p>
					<p className='px-[14px] py-3 bg-[var(--gray)] rounded-[8px] flex-1 border border-[var(--border-black)]'>
						🚩
					</p>
				</div>
			</div>
		</div>
	)
}
