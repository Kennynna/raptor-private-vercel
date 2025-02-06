// @ts-ignoreimport { CloseIcon, SearchIcon } from '@/shared/icons/for-logic'
import { Input } from '../ui/input'
import { ArrowReloadIcon } from '../nav/tools/icons/arrows-reload'
import { SearchTokenArray } from '@/constants'
import { useState } from 'react'
import { DrawerClose } from '../ui/drawer'
import { Button } from '../ui/button'
import { CloseIcon } from '@/shared/icons/for-logic/close'
import { SearchIcon } from '@/shared/icons/for-logic/search'
export const SearchToken = () => {
	const [search, setSearch] = useState<string>('')
	const [items, setItems] = useState(SearchTokenArray)

	function searchItems(e: React.ChangeEvent<HTMLInputElement>) {
		setSearch(e.target.value)
		setItems(
			SearchTokenArray.filter(item =>
				item.name.toLowerCase().includes(e.target.value)
			)
		)
	}
	return (
		<div className='flex flex-col w-full h-screen'>
			<div className='flex justify-between relative items-center p-4'>
				<p className='text-[17px] font-semibold text-center flex-1'>Search</p>
				<div className='absolute top-4 right-4'>
					<DrawerClose>
						<CloseIcon />
					</DrawerClose>
				</div>
			</div>

			<div className='px-4'>
				<div className='bg-[#1A1A1A] py-[10px] rounded-[12px] flex items-center px-4 gap-4'>
					<SearchIcon />
					<Input
						type='text'
						placeholder='Token name or Contract Address'
						value={search}
						onChange={e => searchItems(e)}
					/>
				</div>
			</div>

			<div className=' overflow-y-auto mt-2 px-4 flex-1'>
				<div className='flex flex-col gap-2 mb-16'>
					{items.map(item => (
						<TokenItem key={item.id} name={item.name} id={item.id} />
					))}
				</div>
			</div>

			<DrawerClose>
				<div className='p-4 w-full fixed bottom-0'>
					<Button className='bg-[#3B3C40] rounded-[20px] py-[12px] px-[14px] text-white text-[15px] font-semibold text-center w-full'>
						Close
					</Button>
				</div>
			</DrawerClose>
		</div>
	)
}

interface TokenItemProps {
	name: string
	id: number
}
export function TokenItem({ name}: TokenItemProps) {
	return (
		<div className='flex items-center p-4 justify-between bg-[var(--gray)] rounded-[24px]'>
			<div className=' flex items-center gap-2 font-medium '>
				<img src='/token-avatar.png' alt='' />
				<div className='flex flex-col gap-1'>
					<p className='font-black'>{name}</p>
					<p>
						0.346$ <span className='text-[var(--orange)]'>-3.78%</span>
					</p>
				</div>
			</div>

			<div>
				<p className='opacity-50'>MCap</p>
				<p>$3 M</p>
			</div>

			<ArrowReloadIcon color='#949494' height='32px' width='32px' />
		</div>
	)
}
