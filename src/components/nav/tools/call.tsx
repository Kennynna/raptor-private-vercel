import Plane from '@/shared/icons/plane'
import { PlusIcon } from './icons/plus'
import { Switch } from '@/components/ui/switch'

export const CallSniper = ({ setActiveMenu }: { setActiveMenu: (string: string) => void }) => {
	return (
		<div className='tools-main-block' onClick={() => setActiveMenu('CALL_SNIPER')}>
			<div className='flex flex-col gap-2'>
				<div className='flex items-center gap-2'>
					<Plane />
					<p className='tools-main-block-title'>Call sniper</p>
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
					</div>
				</div>
			</div>
		</div>
	)
}
