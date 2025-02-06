export const ArrowDawn = ({color}: {color?: string} ) => {
    return (
			<>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='20'
					height='20'
					viewBox='0 0 20 20'
					fill='none'
				>
					<path
						d='M13.333 8.33203L9.99967 11.6654L6.66634 8.33203'
						stroke={color ? color : 'white'}
						stroke-width='1.66667'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			</>
		)
}
