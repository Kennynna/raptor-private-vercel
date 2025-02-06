
import { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'

// Иконки
import { InfoIcon } from './icons/info'
import { PenIcon } from './icons/pen'
import { FileIcon } from './icons/fille'
import { PlusIcon } from './icons/plus'
import { ArrowDawn } from '@/shared/icons/for-logic/arrow-dawn'

import { CopytradingList } from './copytrading-list'

export function CopyTradingFull() {
	// Храним ID активного блока
	const [activeBlock, setActiveBlock] = useState(null)

	// Обработчик клика по PenIcon
	const handleToggleBlock = (blockId: number | null) => {
		setActiveBlock(prev => (prev === blockId ? null : blockId))
	}

	// Рендеринг блока с CopytradingList
	const renderBlock = (blockId: number, title: string) => {
		const isActive = activeBlock === blockId

		return (
			<div className='  rounded-[20px] w-full mt-4'>
				<div
					className={`bg-[var(--gray)] p-4 rounded-[20px] ${
						isActive ? 'border-[1px] border-[#97F06D]' : ''
					}`}
				>
					{/* Тайтл + Switch */}
					<div className='flex items-center justify-between mb-8 '>
						<div className='flex gap-2 items-center'>
							<p className='text-[16px] font-semibold'>{title}</p>
							<PenIcon click={() => handleToggleBlock(blockId)} />
						</div>
						<Switch defaultChecked />
					</div>
					{/* Addresses settings */}
					<div>
						<p className='mb-2'>Addresses settings</p>
						<div className='flex items-stretch gap-2 overflow-auto scrollbar-hide'>
							{/* Добавление нового адреса */}
							<div className='flex flex-col gap-1.5 bg-[var(--black)] rounded-[12px] py-4 px-6 cursor-pointer text-nowrap'>
								<PlusIcon color='#25EC13' />
								<p>New Address</p>
							</div>

							{/* Пример уже добавленных адресов */}
							<div className='bg-[var(--black)] rounded-[12px] py-4 px-6 flex gap-4 items-center'>
								<div className='flex flex-col items-start'>
									<p>Address 1</p>
									<p>d14dD...3S05f</p>
								</div>
								<ArrowDawn />
							</div>

							<div className='bg-[var(--black)] rounded-[12px] py-4 px-6 flex gap-4 items-center'>
								<div className='flex flex-col items-start'>
									<p>Address 2</p>
									<p>Td3...MnG</p>
								</div>
								<ArrowDawn />
							</div>
						</div>
					</div>
				</div>
				{/* Рендеринг списка, если блок активен */}
				{isActive && <CopytradingList />}
			</div>
		)
	}

	return (
		<div className='p-4'>
			{/* Заголовок и иконки */}
			<div className='flex items-center justify-between mb-2 px-4'>
				<h1 className='text-[24px] font-semibold'>Copytrading</h1>
				<div className='flex items-center gap-2'>
					<InfoIcon />
					<Drawer shouldScaleBackground={false}>
						<DrawerTrigger>
							<FileIcon />
						</DrawerTrigger>
						<DrawerContent>Copytrading history</DrawerContent>
					</Drawer>
				</div>
			</div>

			{/* Блоки Copytrading */}
			{renderBlock(1, 'CT template 1')}
			{renderBlock(2, 'CT template 2')}
		</div>
	)
}
