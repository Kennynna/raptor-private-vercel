export const ToolsIcon = ({ isActive }: { isActive: string }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='25'
			viewBox='0 0 24 25'
			fill='none'
		>
			<path
				d='M10 18.5H21M3 18.5H6M6 18.5V20.5M6 18.5V16.5M20 12.5H21M3 12.5H16M16 12.5V14.5M16 12.5V10.5M14 6.5H21M3 6.5H10M10 6.5V8.5M10 6.5V4.5'
				stroke={isActive === 'Tools' ? '#97F06D' : '#5A5A5A'}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
}
