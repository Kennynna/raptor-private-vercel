// @ts-ignore
import { CopyIcon } from '@/shared/icons/for-logic/copy'
import IconPlane from '@/shared/icons/plane'
import IconQr from '@/shared/icons/qr'

export const Referrals = () => {
	return (
		<div className='p-4 w-full'>
			<p className='text-[24px] font-black mb-4'>Referrals</p>

			<div className='p-4 bg-[var(--gray)] rounded-[12px] flex flex-col gap-2 w-full'>
				<p>Your referral code</p>
				<div className='bg-[var(--black)] rounded-[12px] flex items-center gap-2 p-[13px] justify-center'>
					<p>FRI945AK</p>
					<CopyIcon />
				</div>
				<div className='flex items-center  gap-2'>
					<div className='bg-[var(--black)] rounded-[12px] flex items-center gap-2 px-[13px] py-3 justify-center text-[#97F06D] font-bold text-[15px] flex-1'>
						<CopyIcon color='#97F06D' />
						<p>Copy</p>
					</div>
					<div className='bg-[var(--black)] rounded-[12px] flex items-center gap-2 px-[13px] py-3 justify-center text-[#97F06D] font-bold text-[15px] flex-1'>
						<IconQr />
						<p>QR</p>
					</div>
					<div className='bg-[var(--black)] rounded-[12px] flex items-center gap-2 px-[13px] py-3 justify-center text-[#97F06D] font-bold text-[15px] flex-1'>
						<IconPlane />
						<p>Share</p>
					</div>
				</div>
			</div>

			<p className='text-[24px] font-black mb-4 mt-8'>Team</p>
			<div className='flex flex-col w-full gap-2'>
				{/* line */}
				<div className='p-4 bg-[var(--gray)] rounded-[20px]'>
					<p className='mb-2'>1 line</p>
					<div className='flex items-center w-full gap-1'>
						<div className='flex-1 flex flex-col g-1 bg-[var(--black)] rounded-[12px] px-4 py-2'>
							<p className='text-[#999] text-[14px] font-medium'>Bonus</p>
							<p className='text-[#F2F2F2] font-bold'>+20%</p>
						</div>
						<div className='flex-1 flex flex-col g-1 bg-[var(--black)] rounded-[12px] px-4 py-2'>
							<p className='text-[#999] text-[14px] font-medium'>Users</p>
							<p className='text-[#F2F2F2] font-bold'>6</p>
						</div>
						<div className='flex-1 flex flex-col g-1 bg-[var(--black)] rounded-[12px] px-4 py-2'>
							<p className='text-[#999] text-[14px] font-medium'>T Volume</p>
							<p className='text-[#F2F2F2] font-bold'>$4.63</p>
						</div>
					</div>
				</div>

				{/* line */}
				<div className='p-4 bg-[var(--gray)] rounded-[20px]'>
					<p className='mb-2'>2 line</p>
					<div className='flex items-center w-full gap-1'>
						<div className='flex-1 flex flex-col g-1 bg-[var(--black)] rounded-[12px] px-4 py-2'>
							<p className='text-[#999] text-[14px] font-medium'>Bonus</p>
							<p className='text-[#F2F2F2] font-bold'>+20%</p>
						</div>
						<div className='flex-1 flex flex-col g-1 bg-[var(--black)] rounded-[12px] px-4 py-2'>
							<p className='text-[#999] text-[14px] font-medium'>Users</p>
							<p className='text-[#F2F2F2] font-bold'>6</p>
						</div>
						<div className='flex-1 flex flex-col g-1 bg-[var(--black)] rounded-[12px] px-4 py-2'>
							<p className='text-[#999] text-[14px] font-medium'>T Volume</p>
							<p className='text-[#F2F2F2] font-bold'>$4.63</p>
						</div>
					</div>
				</div>

				{/* line */}
				<div className='p-4 bg-[var(--gray)] rounded-[20px]'>
					<p className='mb-2'>3 line</p>
					<div className='flex items-center w-full gap-1'>
						<div className='flex-1 flex flex-col g-1 bg-[var(--black)] rounded-[12px] px-4 py-2'>
							<p className='text-[#999] text-[14px] font-medium'>Bonus</p>
							<p className='text-[#F2F2F2] font-bold'>+20%</p>
						</div>
						<div className='flex-1 flex flex-col g-1 bg-[var(--black)] rounded-[12px] px-4 py-2'>
							<p className='text-[#999] text-[14px] font-medium'>Users</p>
							<p className='text-[#F2F2F2] font-bold'>6</p>
						</div>
						<div className='flex-1 flex flex-col g-1 bg-[var(--black)] rounded-[12px] px-4 py-2'>
							<p className='text-[#999] text-[14px] font-medium'>T Volume</p>
							<p className='text-[#F2F2F2] font-bold'>$4.63</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
