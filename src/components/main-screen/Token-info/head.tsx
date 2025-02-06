
// @ts-ignore
import { CopyIcon, StarIcon } from "@/shared/icons/for-logic"
import { TonIconBig } from "@/shared/icons/ton"

export const Head = () => {
	return (
		<div className='flex px-4 text-[24px] font-black w-full justify-between items-center'>
			<div className='flex items-center gap-2'>
				<TonIconBig />
				<p>REDO / TON</p>
				<CopyIcon height='24px' width='24px' />
			</div>
			<div>
				<StarIcon favorited={false} />
			</div>
		</div>
	)
}
