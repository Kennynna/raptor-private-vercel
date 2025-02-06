import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
	className?: string
}

export const ArrowsSwap: React.FC<Props> = ({ className }) => {
	return (
		<div
			className={cn(
				'flex  items-center justify-center rounded-full bg-[#3B3C40] w-8 h-8',
				className
			)}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				height='16'
				viewBox='0 0 16 16'
				fill='none'
			>
				<path
					d='M5.33333 6.6665L5.33333 3.33317L2 3.33317M10.6667 9.33317L10.6667 12.6665L14 12.6665M9.99773 3.05518C10.9229 3.42897 11.7246 4.0548 12.3118 4.86154C12.8991 5.66828 13.2483 6.62441 13.3197 7.61967C13.391 8.61494 13.1817 9.60966 12.7156 10.4919C12.2495 11.3742 11.545 12.1073 10.6826 12.6092M6.00195 12.9449C5.07679 12.5711 4.27504 11.9453 3.68783 11.1385C3.10063 10.3318 2.75181 9.37661 2.68047 8.38135C2.60913 7.38608 2.81837 6.39055 3.2845 5.5083C3.75064 4.62605 4.45499 3.89238 5.31738 3.39046'
					stroke='#949494'
					stroke-width='1.33333'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</svg>
		</div>
	)
}
