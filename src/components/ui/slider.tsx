import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
	React.ElementRef<typeof SliderPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
	<SliderPrimitive.Root
		ref={ref}
		className={cn(
			'relative flex w-full touch-none select-none items-center',
			className
		)}
		{...props}
	>
		<SliderPrimitive.Track className='relative h-[10px] w-full grow overflow-hidden rounded-[12px] bg-[#141414]'>
			<SliderPrimitive.Range className='absolute h-full bg-[#25EC13] dark:bg-gray-50  ' />
		</SliderPrimitive.Track>
		<SliderPrimitive.Thumb className='block h-4 w-4 rounded-full  border-gray-900/50 bg-[#5A5A5A] shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-50/50 dark:bg-gray-950 dark:focus-visible:ring-gray-300' />
	</SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
