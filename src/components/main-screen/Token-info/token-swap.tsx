import { cn } from '@/lib/utils'
import { ArrowDawn, SettingIcon } from '@/shared/icons/for-logic'
import { ArrowsSwap } from '@/shared/icons/for-logic/arrows-swap'
import { ShareIcon } from '@/shared/icons/share'
import { TonIcon } from '@/shared/icons/ton'
import { WalletIcon } from '@/shared/icons/wallet'
import React from 'react'
import { Button } from './ui'
import { TokenModal } from './token-modal'

interface Props {
	className?: string
}

export const TokenSwap: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('mb-16', className)}>
			<div className=' flex flex-col w-full gap-2 relative'>
				{/* 1 column */}
				<div className='p-4 bg-[var(--gray)] w-full rounded-[20px]'>
					{/* header */}
					<div className='flex items-center justify-between mb-2'>
						<p className='font-semibold'>Pay</p>
						<TokenModal>
							<div className='flex items-center gap-2 opacity-50'>
								<p>15% Slippage, 5% Gas</p>
								<SettingIcon />
							</div>
						</TokenModal>
					</div>

					{/* Crypto Tab */}
					<div className='px-6 py-[19px] bg-[var(--black)] flex items-center justify-between rounded-[12px] text-[12px]'>
						<div className='opacity-50'>
							<p className='text-[16px] font-bold '>0 TON</p>
							<p>$0</p>
						</div>
						<div>
							<div className='flex items-center gap-1 justify-end font-bold text-[14px]'>
								<ArrowDawn />
								<p>TON</p>
								<TonIcon />
							</div>
							<div className='flex items-center gap-1 mt-1.5'>
								<WalletIcon />
								<p className='opacity-50'>18.63 TON </p>
								<p className='text-[var(--green)] font-bold '>Max</p>
							</div>
						</div>
					</div>
				</div>

				<ArrowsSwap className='absolute  left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] rotate-20 ' />

				{/*2 column */}
				<div className='p-4 bg-[var(--gray)] w-full rounded-[20px]'>
					{/* header */}
					<div className='flex items-center justify-between mb-2'>
						<p className='font-semibold'>Receive</p>
					</div>

					{/* Crypto Tab */}
					<div className='px-6 py-[19px] bg-[var(--black)] flex items-center justify-between rounded-[12px] text-[12px]'>
						<div className='opacity-50'>
							<p className='text-[16px] font-bold '>0.00 REDO</p>
							<p>$0</p>
						</div>
						<div>
							<div className='flex items-center gap-1 justify-end font-bold text-[14px]'>
								<ArrowDawn />
								<p>REDO</p>
								<TonIcon />
							</div>
							<div className='flex items-center gap-1 mt-1.5 justify-end'>
								<WalletIcon />
								<p className='opacity-50'>0 REDO </p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Profit */}
			<div className='flex w-full gap-2 mt-2'>
				<div className=' flex-1 bg-[var(--gray)] px-4 py-2 rounded-[12px] flex flex-col gap-1'>
					<p className='opacity-50 text-sm'>Profit</p>
					<p className='font-bold text-[var(--green)]'>+21%</p>
				</div>
				<div className=' flex-1 bg-[var(--gray)] px-4 py-2 rounded-[12px] flex flex-col gap-1'>
					<p className='opacity-50 text-sm'>Income</p>
					<p className='font-bold text-[var(--green)]'>+95$</p>
				</div>
				<div className='  bg-[var(--gray)] px-4 py-2 rounded-[12px] flex flex-col items-center justify-center gap-1'>
					<ShareIcon />
					<p className='opacity-50 text-sm'>Share</p>
				</div>
			</div>

			<Button
				text='Swap'
				className='bg-[var(--green)] text-[var(--black)] rounded-[20px] mt-2 '
			/>
		</div>
	)
}
