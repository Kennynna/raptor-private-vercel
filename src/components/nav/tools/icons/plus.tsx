
export const PlusIcon = ({color} : {color?: string}) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='25'
			height='25'
			viewBox='0 0 20 20'
			fill='none'
		>
			<path
				d='M6.66667 10H10M10 10H13.3333M10 10V13.3333M10 10V6.66667M10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10C17.5 14.1421 14.1421 17.5 10 17.5Z'
				stroke={color ? color : 'white'}
				stroke-width='1.66667'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
}
