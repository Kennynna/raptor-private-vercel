/* Импорты из shadcn/ui */
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { InfoIcon } from './icons/info'
import { PenIcon } from './icons/pen'

/* Пример иконок (можно подключить ваши) */
// import { PencilIcon, InfoIcon } from "your-icon-library";

export function QuickBuyFull() {
	return (
		<div className='p-4'>
			{/* Заголовок */}
			<div className='flex items-center justify-between mb-2 px-4'>
				<h1 className='text-[24px] font-semibold'>Quick Buy</h1>
				{/* Иконка информации (по желанию) */}
				<InfoIcon />
			</div>

			<div className='w-full   text-white  rounded-[20px] bg-[var(--gray)] p-4'>
				{/* Блок "QB 1 template" + Switch */}
				<div className='flex items-center justify-between   rounded-md mb-3 ]'>
					<div className='flex items-center gap-2 text-[14px]'>
						<p className='text-[16px] font-semibold'>QB 1 template</p>
						<PenIcon />
					</div>
					<Switch defaultChecked />
				</div>

				{/* Поле "You pay 0.00 TON" */}
				<div className='bg-[var(--black)]  rounded-[12px] text-[15px] p-6 mb-1'>
					<div className=' mb-1 opacity-50'>You pay</div>
					<div>0.00 TON</div>
				</div>

				{/* Slippage */}
				<div className='bg-[var(--black)] rounded-[12px] px-6 py-4'>
					<div className='flex items-center justify-between mb-4'>
						<div>
							<p className='text-[12px] font-medium opacity-50'>Slippage</p>
							<p className='font-semibold'>15.00 %</p>
						</div>
						<div className='flex gap-2 '>
							<button className='px-2 py-1 text-[14px] text-[#949494] font-bold bg-transparent rounded-md hover:bg-[var(--gray-lite)] transition'>
								1%
							</button>
							<button className='px-2 py-1 text-[14px] text-[#949494] font-bold bg-transparent rounded-md hover:bg-[var(--gray-lite)] transition'>
								5%
							</button>
							{/* Активная кнопка */}
							<button className='px-2 py-1 text-[14px] font-bold border border-[#25EC13] text-[#25EC13] rounded-md hover:bg-[var(--green-border)] transition'>
								15%
							</button>
						</div>
					</div>
					<Slider
						defaultValue={[15]}
						max={100}
						step={1}
						className=' rounded-[12px] '
					/>
				</div>

				{/* Заголовок "Order settings" */}
				<div className='text-[16px] font-semibold mt-4'>Order settings</div>

				{/* Tabs: Take Profit / Stop Loss / Trail Stop */}
				<Tabs defaultValue='take-profit'>
					<TabsList className='bg-[var(--black)] rounded-[9px] flex p-0.5 text-[13px] font-bold'>
						<TabsTrigger
							value='take-profit'
							className='flex-1 text-center data-[state=active]:bg-[#3B3C40] data-[state=active]:text-white '
						>
							Take Profit
						</TabsTrigger>
						<TabsTrigger
							value='stop-loss'
							className='flex-1 text-center data-[state=active]:bg-[#3B3C40] data-[state=active]:text-white'
						>
							Stop Loss
						</TabsTrigger>
						<TabsTrigger
							value='trail-stop'
							className='flex-1 text-center data-[state=active]:bg-[#3B3C40] data-[state=active]:text-white'
						>
							Trail Stop
						</TabsTrigger>
					</TabsList>

					{/*FROM BALANCE */}
					<TabsContent value='take-profit'>
						{/* From balance */}
						<div className='bg-[var(--black)] px-6 py-4 rounded-[12px] '>
							<div className='w-full flex items-center justify-between'>
								<div>
									<div className=' mb-1 text-[14px] opacity-50'>
										From balance
									</div>
									<div className='text-[15px] mb-2  text-[#909090] font-black'>
										0.00 %
									</div>
								</div>
								<div>
									<div className='flex gap-2 mb-2'>
										<button className='px-[6px] py-1 text-[14px] bg-[#3B3C40]  rounded-[4px] hover:bg-[var(--gray-lite)] transition text-[#949494] font-bold'>
											25%
										</button>
										<button className='px-[6px] py-1 text-[14px] bg-[#3B3C40]  rounded-[4px] hover:bg-[var(--gray-lite)] transition text-[#949494] font-bold'>
											50%
										</button>
										<button className='px-[6px] py-1 text-[14px] bg-[#3B3C40]  rounded-[4px] hover:bg-[var(--gray-lite)] transition text-[#949494] font-bold'>
											100%
										</button>
									</div>
								</div>
							</div>
							<Slider defaultValue={[0]} max={100} step={1} />
						</div>

						{/* When grow on */}
						<div className='bg-[var(--black)] px-6 py-4 rounded-[12px] mt-1'>
							<div className='w-full flex items-center justify-between'>
								<div>
									<div className='opacity-50 mb-1 text-[14px]'>
										When grow on
									</div>
									<div className='text-[16px] mb-2 text-[#909090] font-black'>
										0.00 %
									</div>
								</div>
								<div>
									<div className='flex gap-2 mb-2'>
										<button className='px-[6px] py-1 text-[14px] bg-[#3B3C40]  rounded-[4px] hover:bg-[var(--gray-lite)] transition text-[#949494] font-bold'>
											25%
										</button>
										<button className='px-[6px] py-1 text-[14px] bg-[#3B3C40]  rounded-[4px] hover:bg-[var(--gray-lite)] transition text-[#949494] font-bold'>
											50%
										</button>
										<button className='px-[6px] py-1 text-[14px] bg-[#3B3C40]  rounded-[4px] hover:bg-[var(--gray-lite)] transition text-[#949494] font-bold'>
											100%
										</button>
									</div>
								</div>
							</div>
							<Slider defaultValue={[0]} max={100} step={1} />
						</div>
					</TabsContent>

					{/* Содержимое вкладки Stop Loss */}
					<TabsContent value='stop-loss'>
						<div className='bg-[var(--gray)] p-3 rounded-md'>
							<div className='text-[14px] mb-2'>
								Тут можно сделать стоп-лосс...
							</div>
							{/* Аналогично оформляете блоки, кнопки и слайдеры */}
						</div>
					</TabsContent>

					{/* Содержимое вкладки Trail Stop */}
					<TabsContent value='trail-stop'>
						<div className='bg-[var(--gray)] p-3 rounded-md'>
							<div className='text-[14px] mb-2'>А тут - трайл-стоп...</div>
						</div>
					</TabsContent>
				</Tabs>
			</div>

			{/* Кнопка "Save settings" */}
			<div className='mt-4'>
				<button className='w-full p-3 text-[#25EC13] rounded-[20px] text-[15px]  font-semibold hover:opacity-80 transition bg-[var(--gray)]'>
					Save settings
				</button>
			</div>
		</div>
	)
}
