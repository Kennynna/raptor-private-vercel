import { cn } from '@/lib/utils'
import { DrawerCloseIcon } from './icons/drawer-close-icon'
import { DrawerClose } from '@/components/ui/drawer.tsx'
export const BridgeDrawerHistory = () => {
	return (
		<div className='p-4 h-screen overflow-scroll '>
			{/* header */}
			<div className='w-full flex items-center text-center justify-center'>
				<p className='text-[17px] font-semibold w-full'>Bridge history</p>
				<DrawerClose>
					<DrawerCloseIcon />
				</DrawerClose>
			</div>

			{/* content */}

			<div className='mt-4 flex flex-col gap-2 w-full text-[16px]'>
				<HistoryItem completed={false} />
				<HistoryItem completed={true} />
				<HistoryItem completed={false} />

			</div>
		</div>
	)
}

export const HistoryItem = ({ completed }: { completed: boolean }) => {
	return (
		<div className='p-4 bg-[var(--gray)] rounded-[12px] flex flex-col gap-2 w-full'>
			<div className='flex items-center justify-between'>
				<p className='font-bold '>Swap</p>
				<p>#d5676543d7a2</p>
			</div>
			<div className='min-w-full h-0.5 bg-[#222]'></div>
			<div className='flex items-center justify-between'>
				<p className='font-bold '>17 TON</p>
				<p className='font-bold '>~0.4556652 SOL</p>
			</div>
			<div className='flex items-center justify-between'>
				<p>To wallet</p>
				<p className='font-bold '>ALk4K...LxWoO</p>
			</div>
			<div className='flex items-center justify-between'>
				<p>10.12.2024, 14:28</p>
				<p
					className={cn('font-medium', {
						'text-[var(--green)]': completed,
						'text-[var(--red)]': !completed,
					})}
				>
					{completed ? 'Completed' : 'Canceled'}
				</p>
			</div>
		</div>
	)
}
