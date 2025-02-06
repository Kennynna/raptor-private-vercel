import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,

	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Slider } from '@/components/ui/slider'

export function TokenModal({ children }: { children: React.ReactNode }) {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className='w-[90%] bg-[#2A2A2A] border-none rounded-[24px]'>
				<DialogHeader>
					<DialogTitle className='text-[16px] text-start'>
						Slippage & Gas settings
					</DialogTitle>
				</DialogHeader>

				<div className='bg-[var(--black)] rounded-[12px] px-6 py-4 '>
					<div className='flex items-center justify-between mb-4'>
						<div>
							<p className='text-[12px] font-medium opacity-50'>Slippage</p>
							<p className='font-semibold'>15.00 %</p>
						</div>
						<div className='flex gap-2 '>
							<button className='px-2 py-1 text-[14px] text-[#949494] font-bold bg-transparent rounded-md hover:bg-[var(--gray-lite)] transition'>
								1%
							</button>
							<button className='px-2 py-1 text-[14px] text-[#949494] font-bold bg-transparent rounded-md hover:bg-[var(--gray-lite)] transition'>
								5%
							</button>
							<button className='px-2 py-1 text-[14px] font-bold border border-[#FFF] text-[#FFF] rounded-md hover:bg-[var(--green-border)] transition'>
								15%
							</button>
						</div>
					</div>
					<Slider defaultValue={[15]} max={100} step={1} />
				</div>

				<div className='bg-[var(--black)] rounded-[12px] px-6 py-4'>
					<div className='flex items-center justify-between mb-4'>
						<div>
							<p className='text-[12px] font-medium opacity-50'>Gas</p>
							<p className='font-semibold'>$$$</p>
						</div>
						<div className='flex gap-2'>
							<button className='px-2 py-1 text-[14px] text-[#949494] font-bold bg-transparent rounded-md hover:bg-[var(--gray-lite)] transition'>
								1%
							</button>
							<button className='px-2 py-1 text-[14px] text-[#949494] font-bold bg-transparent rounded-md hover:bg-[var(--gray-lite)] transition'>
								5%
							</button>
							<button className='px-2 py-1 text-[14px] font-bold border border-[#FFF] text-[#FFF] rounded-md hover:bg-[var(--green-border)] transition'>
								15%
							</button>
						</div>
					</div>
					<Slider defaultValue={[15]} max={100} step={1} />
				</div>
				<DialogTrigger>
					<Button className='w-full bg-[#3B3C40] text-[15px] py-[11px] font-semibold rounded-[8px]'>
						Save & close
					</Button>
				</DialogTrigger>
			</DialogContent>
		</Dialog>
	)
}
