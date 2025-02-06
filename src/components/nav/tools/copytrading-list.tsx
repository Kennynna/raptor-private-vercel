import { CryptoListItem } from '@/components/main-screen/crypto-list-item'
import { Slider } from '@/components/ui/slider'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { InfoIcon } from './icons/info'
import { MinusIcon } from './icons/minus'

export const CopytradingList = () => {
	return (
		<div>
			<div className='bg-[var(--gray)] p-4 rounded-[20px] w-full mt-1'>
				<div className='  w-full mt-4'>
					<h2 className='text-[16px] font-semibold mb-3'>Buy settings</h2>
					{/* Тут можно сделать Tabs (Sell after wallet / Sell with limits / Manual sell) */}
					<Tabs defaultValue='sell-after-wallet'>
						<TabsList className='bg-[var(--black)] rounded-[9px] flex p-0.5 text-[13px] font-bold mb-4'>
							<TabsTrigger
								value='sell-after-wallet'
								className='flex-1 text-center data-[state=active]:bg-[#3B3C40] data-[state=active]:text-white'
							>
								Sell after wallet
							</TabsTrigger>
							<TabsTrigger
								value='sell-with-limits'
								className='flex-1 text-center data-[state=active]:bg-[#3B3C40] data-[state=active]:text-white'
							>
								Sell with limits
							</TabsTrigger>
							<TabsTrigger
								value='manual-sell'
								className='flex-1 text-center data-[state=active]:bg-[#3B3C40] data-[state=active]:text-white'
							>
								Manual sell
							</TabsTrigger>
						</TabsList>

						{/* Содержимое вкладок */}
						<TabsContent value='sell-after-wallet'>
							<div className='flex flex-col gap-3'>
								{/* "You pay" */}
								<div className='bg-[var(--black)] rounded-[12px] text-[15px] p-6 flex w-full justify-between'>
									<div className='flex flex-col gap-1 items-start'>
										<div className=' opacity-50'>You pay</div>
										<p>3.00 TON</p>
									</div>
									<div>
										<CryptoListItem />
									</div>
								</div>

								{/* Slippage */}
								<div className='bg-[var(--black)] rounded-[12px] px-6 py-4 '>
									<div className='flex items-center justify-between mb-4'>
										<div>
											<p className='text-[12px] font-medium opacity-50'>
												Slippage
											</p>
											<p className='font-semibold'>15.00 %</p>
										</div>
										<div className='flex gap-2 '>
											<button className='px-2 py-1 text-[14px] text-[#949494] font-bold bg-transparent rounded-md hover:bg-[var(--gray-lite)] transition'>
												1%
											</button>
											<button className='px-2 py-1 text-[14px] text-[#949494] font-bold bg-transparent rounded-md hover:bg-[var(--gray-lite)] transition'>
												5%
											</button>
											<button className='px-2 py-1 text-[14px] font-bold border border-[#FFF] text-[#FFF] rounded-md hover:bg-[var(--green-border)] transition'>
												15%
											</button>
										</div>
									</div>
									<Slider defaultValue={[15]} max={100} step={1} />
								</div>

								{/* Gas */}
								<div className='bg-[var(--black)] rounded-[12px] px-6 py-4'>
									<div className='flex items-center justify-between mb-4'>
										<div>
											<p className='text-[12px] font-medium opacity-50'>Gas</p>
											<p className='font-semibold'>$$$</p>
										</div>
										<div className='flex gap-2'>
											<button className='px-2 py-1 text-[14px] text-[#949494] font-bold bg-transparent rounded-md hover:bg-[var(--gray-lite)] transition'>
												1%
											</button>
											<button className='px-2 py-1 text-[14px] text-[#949494] font-bold bg-transparent rounded-md hover:bg-[var(--gray-lite)] transition'>
												5%
											</button>
											<button className='px-2 py-1 text-[14px] font-bold border border-[#FFF] text-[#FFF] rounded-md hover:bg-[var(--green-border)] transition'>
												15%
											</button>
										</div>
									</div>
									<Slider defaultValue={[15]} max={100} step={1} />
								</div>
							</div>
						</TabsContent>

						<TabsContent value='sell-with-limits'>
							<div className='bg-[var(--black)] p-3 rounded-md'>
								<p className='text-[14px]'>Содержимое "Sell with limits"…</p>
							</div>
						</TabsContent>

						<TabsContent value='manual-sell'>
							<div className='bg-[var(--black)] p-3 rounded-md'>
								<p className='text-[14px]'>Содержимое "Manual sell"…</p>
							</div>
						</TabsContent>
					</Tabs>
				</div>

				{/* Order settings */}
				<div className=' w-full mt-4'>
					<div className='text-[16px] font-semibold mb-3 flex items-center justify-between'>
						<p>Order settings</p>
						<InfoIcon />
					</div>
					<Tabs defaultValue='take-profit'>
						<TabsList className='bg-[var(--black)] rounded-[9px] flex p-0.5 text-[13px] font-bold mb-4'>
							<TabsTrigger
								value='take-profit'
								className='flex-1 text-center data-[state=active]:bg-[#3B3C40] data-[state=active]:text-white'
							>
								Take Profit
							</TabsTrigger>
							<TabsTrigger
								value='stop-loss'
								className='flex-1 text-center data-[state=active]:bg-[#3B3C40] data-[state=active]:text-white'
							>
								Stop Loss
							</TabsTrigger>
						</TabsList>

						{/* Take Profit */}
						<TabsContent value='take-profit'>
							<div className='flex flex-col gap-3'>
								{/* From balance */}
								<div className='bg-[var(--black)] px-6 py-4 rounded-[12px]'>
									<div className='w-full flex items-center justify-between mb-2'>
										<div>
											<div className='mb-1 text-[14px] opacity-50'>
												From balance
											</div>
											<div className='text-[15px] mb-2 text-[#909090] font-black'>
												50 %
											</div>
										</div>
										<div className='flex gap-2 mb-2'>
											<button className='px-[6px] py-1 text-[14px] bg-[#3B3C40] rounded-[4px] hover:bg-[var(--gray-lite)] transition text-[#949494] font-bold'>
												25%
											</button>
											<button className='px-[6px] py-1 text-[14px] bg-[#3B3C40] rounded-[4px] hover:bg-[var(--gray-lite)] transition text-[#949494] font-bold'>
												50%
											</button>
											<button className='px-[6px] py-1 text-[14px] bg-[#3B3C40] rounded-[4px] hover:bg-[var(--gray-lite)] transition text-[#949494] font-bold'>
												100%
											</button>
										</div>
									</div>
									<Slider defaultValue={[50]} max={100} step={1} />
								</div>

								{/* When grow on */}
								<div className='bg-[var(--black)] px-6 py-4 rounded-[12px]'>
									<div className='w-full flex items-center justify-between mb-2'>
										<div>
											<div className='mb-1 text-[14px] opacity-50'>
												When grow on
											</div>
											<div className='text-[15px] mb-2 text-[#909090] font-black'>
												100 %
											</div>
										</div>
										<div className='flex gap-2 mb-2'>
											<button className='px-[6px] py-1 text-[14px] bg-[#3B3C40] rounded-[4px] hover:bg-[var(--gray-lite)] transition text-[#949494] font-bold'>
												1%
											</button>
											<button className='px-[6px] py-1 text-[14px] bg-[#3B3C40] rounded-[4px] hover:bg-[var(--gray-lite)] transition text-[#949494] font-bold'>
												5%
											</button>
											<button className='px-[6px] py-1 text-[14px] bg-[#3B3C40] rounded-[4px] hover:bg-[var(--gray-lite)] transition text-[#949494] font-bold'>
												15%
											</button>
										</div>
									</div>
									<Slider defaultValue={[100]} max={100} step={1} />
								</div>
							</div>
						</TabsContent>

						{/* Stop Loss */}
						<TabsContent value='stop-loss'>
							<div className='bg-[var(--black)] p-3 rounded-md'>
								<p className='text-[14px] mb-2'>
									Тут можно сделать стоп-лосс...
								</p>
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</div>
			{/* Buy settings */}

			{/* Кнопки "Create order" / "Save settings" */}
			<div className='flex gap-2 mt-4 flex-col'>
				<button className='flex-1 p-3 text-black rounded-[20px] text-[15px] font-semibold hover:opacity-80 transition bg-[#97F06D]'>
					Create order
				</button>
				<button className='flex-1 p-3 text-[#25EC13] rounded-[20px] text-[15px] font-semibold hover:opacity-80 transition bg-[var(--gray)]'>
					Save settings
				</button>
			</div>

			{/* Created orders */}
			<p className='text-[16px] font-semibold mt-8 mb-2'>Created orders</p>
			<div className='flex flex-col gap-2 mb-4'>
				<div className='py-3 px-4 bg-[var(--gray)] rounded-[12px]  flex gap-4 items-start text-nowrap text-[14px] font-bold'>
					<div className='text-[#EA4A5A] '>Stop Loss</div>
					<div className='flex flex-col items-start gap-2'>
						<div>
							<p className='opacity-50 text-[12px] font-medium'>Price</p>
							<p>0.0000289$</p>
						</div>
						<div>
							<p className='opacity-50 text-[12px] font-medium'>
								From current price
							</p>
							<p>-76%</p>
						</div>
					</div>
					<div className='flex flex-col items-start gap-2 flex-1'>
						<div className='w-full'>
							<div className='flex items-center justify-between w-full'>
								<p className='opacity-50 text-[12px] font-medium'>Amount</p>
								<MinusIcon />
							</div>
							<p>0.0146 DURA</p>
						</div>
						<div>
							<p className='opacity-50 text-[12px] font-medium'>From balance</p>
							<p>5%</p>
						</div>
					</div>
				</div>
				<div className='py-3 px-4 bg-[var(--gray)] rounded-[12px]  flex gap-4 items-start text-nowrap text-[14px] font-bold'>
					<div className='text-[#25EC13] '>Stop Loss</div>
					<div className='flex flex-col items-start gap-2'>
						<div>
							<p className='opacity-50 text-[12px] font-medium'>Price</p>
							<p>0.0000289$</p>
						</div>
						<div>
							<p className='opacity-50 text-[12px] font-medium'>
								From current price
							</p>
							<p>-76%</p>
						</div>
					</div>
					<div className='flex flex-col items-start gap-2 flex-1'>
						<div className='w-full'>
							<div className='flex items-center justify-between w-full'>
								<p className='opacity-50 text-[12px] font-medium'>Amount</p>
								<MinusIcon />
							</div>
							<p>0.0146 DURA</p>
						</div>
						<div>
							<p className='opacity-50 text-[12px] font-medium'>From balance</p>
							<p>5%</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
