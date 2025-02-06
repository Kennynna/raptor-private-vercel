
import { TokenTabInfo } from './token-tab-info'
import { Head } from './head'
import { Button } from './ui'
import { TokenSwap } from './token-swap'

const Token = () => {
	return (
		<div className='p-4 w-full '>
			<Head />
      <Button text='Show chart' />
			<TokenTabInfo />
      <TokenSwap/>
		</div>
	)
}
export default Token
