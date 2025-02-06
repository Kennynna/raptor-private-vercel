import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
	className?: string
  text: string
}

export const Button: React.FC<Props> = ({ className, text }) => {
	return (
		<button
			type='button'
			className={cn(
				'w-full flex items-center justify-center bg-[var(--gray)] text-[15px] font-semibold py-4 text-[#f2f2f2] rounded-[12px] border border-[var(--border-black)] mt-8 mb-4' ,
				className
			)}
		>
      {text}
    </button>
	)
}
