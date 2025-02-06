import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'

export function DialogDemo({ children }: { children: React.ReactNode }) {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className='w-[90%] bg-[#2A2A2A] border-none rounded-[24px]'>
				<DialogHeader>
					<DialogTitle className='text-[24px] '>Delete 2 tokens? </DialogTitle>
					<DialogDescription className='text-[#FFF] text-[16px] opacity-50 text-start'>
						You can check them later in “recently deleted”, or add again with CA
						from main screen
					</DialogDescription>
				</DialogHeader>
				<DialogFooter className='gap-1'>
					<DialogTrigger className='flex gap-2 w-full'>
						<Button
							type='button'
							className='bg-[#3B3C40] flex-1 font-bold text-[15px] py-[11px] rounded-[8px]'
						>
							Cancel
						</Button>
						<Button
							type='button'
							className='bg-[#3B3C40] flex-1 text-[#EA4A5A] font-bold text-[15px] py-[11px] rounded-[8px]'
						>
							Delete
						</Button>
					</DialogTrigger>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
