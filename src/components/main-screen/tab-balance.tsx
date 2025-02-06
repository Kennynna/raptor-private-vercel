export const TabBalance = () => {
	return (
		<div className='flex justify-center flex-col w-full items-center gap-[12px]'>
			<div>
				<p className='text-[32px] font-bold '>$166.15</p>
			</div>
			<div className='flex gap-2 text-[var(--green)] text-[16px] font-medium items-center'>
				<p>+$25.15</p>
				<p className='tab-balance-green '>+15.32%</p>
			</div>
		</div>
	)
}
