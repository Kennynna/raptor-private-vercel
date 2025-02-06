import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
	className?: string
}

export const ShareIcon: React.FC<Props> = ({ className }) => {
	return (
		<svg
			className={cn('', className)}
			xmlns='http://www.w3.org/2000/svg'
			width='25'
			height='24'
			viewBox='0 0 25 24'
			fill='none'
		>
			<path
				d='M9.5 6L12.5 3M12.5 3L15.5 6M12.5 3V13M7.50023 10C6.56835 10 6.10241 10 5.73486 10.1522C5.24481 10.3552 4.85523 10.7448 4.65224 11.2349C4.5 11.6024 4.5 12.0681 4.5 13V17.8C4.5 18.9201 4.5 19.4798 4.71799 19.9076C4.90973 20.2839 5.21547 20.5905 5.5918 20.7822C6.0192 21 6.57899 21 7.69691 21H17.3036C18.4215 21 18.9805 21 19.4079 20.7822C19.7842 20.5905 20.0905 20.2839 20.2822 19.9076C20.5 19.4802 20.5 18.921 20.5 17.8031V13C20.5 12.0681 20.4999 11.6024 20.3477 11.2349C20.1447 10.7448 19.7554 10.3552 19.2654 10.1522C18.8978 10 18.4319 10 17.5 10'
				stroke='#909090'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
}
