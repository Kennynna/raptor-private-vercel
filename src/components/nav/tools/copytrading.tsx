import { PlusIcon } from './icons/plus'
import { CheckIcon } from './icons/check'
import { Switch } from '@/components/ui/switch'

export const Copytrading = ({ setActiveMenu }: { setActiveMenu: (string: string) => void }) => {
  return (
		<div
			className='tools-main-block'
			onClick={() => setActiveMenu('COPYTRADING')}
		>
			<div className='flex flex-col gap-2'>
				<div className='flex items-center gap-2'>
					<CheckIcon />
					<p className='tools-main-block-title'>Copytrading</p>
				</div>

				<div>
					<p className='tools-main-block-desc'>Saved templates</p>
					<div className='flex items-center gap-1'>
						<div className='tools-main-block-item'>
							<PlusIcon />
						</div>
						<div className='tools-main-block-item flex items-center gap-2'>
							Ct Template 1 <Switch />
						</div>
						<div className='tools-main-block-item flex items-center gap-2'>
							Ct Template 1 <Switch />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
