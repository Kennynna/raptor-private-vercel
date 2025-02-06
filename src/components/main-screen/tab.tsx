import { TabBalance } from './tab-balance'
import { TabMenu } from './tab-menu'

export const Tab = () => {
	return (
		<div className='flex flex-col gap-4 mb-8 relative z-20'>
			<TabBalance />
			<TabMenu />
		</div>
	)
}
