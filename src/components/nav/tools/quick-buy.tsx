import { ArrowCircleIcon } from './icons/arrow-cicrle'
import { TonIcon } from '@/shared/icons/ton'
import { Switch } from '@/components/ui/switch'

export const QuickBuy = ({
	setActiveMenu,
}: {
	setActiveMenu: (string: string) => void
}) => {
	return (
		<div className='tools-main-block' onClick={() => setActiveMenu('QUICKBUY')}>
			<div className='flex flex-col gap-2'>
				<div className='flex items-center gap-2'>
					<ArrowCircleIcon />
					<p className='tools-main-block-title'>Quick buy</p>
				</div>

				<div>
					<p className='tools-main-block-desc'>Saved templates</p>
					<div className='flex items-center gap-1'>
						<div className='tools-quick-buy flex items-center  text-[12px] '>
							<div className='flex items-center gap-1 mr-2'>
								<TonIcon />
								<p>3 TON</p>
							</div>
							<p>
								· 15% Slippage ·{' '}
								<span className='mr-3 text-[var(--green)]'> +100% TP </span>
							</p>
							<Switch />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
