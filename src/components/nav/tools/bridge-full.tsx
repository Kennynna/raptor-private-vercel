import { InfoIcon } from './icons/info'
import { FileIcon } from './icons/fille'
import { cn } from '@/lib/utils'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import {
	Drawer,
	DrawerContent,
	DrawerTrigger,
} from '@/components/ui/drawer.tsx'
import { WHITE_TEXT, WHITE_TEXT_OPACITY } from './lib/style-constants'
import { CryptoListItem } from '@/components/main-screen/crypto-list-item'
import { ArrowReloadIcon } from './icons/arrows-reload'
import { WalletListItem } from '@/components/main-screen/wallet-list-item'
import { BridgeDrawerHistory } from './bridge-drawer-history'

export const BridgeFull = () => {
	return (
		<div className='p-4'>
			<div className='flex items-center justify-between mb-2 px-4'>
				<h1 className='text-[24px] font-semibold'>Bridge</h1>
				{/* Иконка информации (по желанию) */}
				<div className='flex items-center gap-2'>
					<InfoIcon />
					<Drawer shouldScaleBackground={false}>
						<DrawerTrigger >
							<FileIcon />
						</DrawerTrigger>
						<DrawerContent>
							<BridgeDrawerHistory />
						</DrawerContent>
					</Drawer>
				</div>
			</div>

			{/* Pay */}

			<div className='flex flex-col gap-2 w-full p-4 bg-[var(--gray)] rounded-[12px]'>
				<div className='w-full flex items-center justify-between'>
					<p className={cn(WHITE_TEXT, ``)}>Pay</p>
					<p className={cn(WHITE_TEXT_OPACITY, ``)}>Min 10$</p>
				</div>
				<div>
					<Tabs defaultValue='from-bot'>
						<TabsList className='bg-[var(--black)] rounded-[9px] flex p-0.5 text-[13px] font-bold'>
							<TabsTrigger
								value='from-bot'
								className='flex-1 text-center data-[state=active]:bg-[#3B3C40] data-[state=active]:text-white '
							>
								From BOT
							</TabsTrigger>
							<TabsTrigger
								value='stop-loss'
								className='flex-1 text-center data-[state=active]:bg-[#3B3C40] data-[state=active]:text-white'
							>
								External wallet
							</TabsTrigger>
						</TabsList>

						<TabsContent value='from-bot'>
							<div className='py-5 px-6 bg-[var(--black)] rounded-[12px] flex items-center justify-between'>
								<div className=''>
									<p className='opacity-50 text-[12px] font-bold '>You pay</p>
									<p className='text-[16px] font-black text-[#949494]'>
										0.00 TON
									</p>
								</div>
								<div>
									<CryptoListItem />
								</div>
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</div>

			<div className='flex w-full items-center justify-center my-1 '>
				<div className='p-2 bg-[var(--gray)] rounded-full'>
					<ArrowReloadIcon />
				</div>
			</div>

			<div className='flex flex-col gap-2 w-full p-4 bg-[var(--gray)] rounded-[12px]'>
				<div className='w-full flex items-center justify-between'>
					<p className={cn(WHITE_TEXT, ``)}>Receive</p>
					<p className={cn(WHITE_TEXT_OPACITY, ``)}>Comission ~0.2$</p>
				</div>
				<div>
					<Tabs defaultValue='To-BOT'>
						<TabsList className='bg-[var(--black)] rounded-[9px] flex p-0.5 text-[13px] font-bold'>
							<TabsTrigger
								value='To-BOT'
								className='flex-1 text-center data-[state=active]:bg-[#3B3C40] data-[state=active]:text-white '
							>
								To BOT
							</TabsTrigger>
							<TabsTrigger
								value='stop-loss'
								className='flex-1 text-center data-[state=active]:bg-[#3B3C40] data-[state=active]:text-white'
							>
								Another wallet
							</TabsTrigger>
						</TabsList>

						<TabsContent value='To-BOT'>
							<div className='py-5 px-6 bg-[var(--black)] rounded-[12px] flex items-center justify-between'>
								<div className=''>
									<p className='opacity-50 text-[12px] font-bold '>
										You receive
									</p>
									<p className='text-[16px] font-black text-[#949494]'>
										0.00 SOL
									</p>
								</div>
								<div>
									<CryptoListItem />
								</div>
							</div>
						</TabsContent>
					</Tabs>
				</div>

				<div className='mt-4 w-full'>
					<p className={cn(WHITE_TEXT, ``)}>To wallet</p>
					<div className='bg-[var(--black)] rounded-[12px] py-5 px-6 flex items-center justify-between w-full mt-2'>
						<p className='text-[#949494] font-medium text-[16px]'>
							Wallet address
						</p>
						<div>
							<WalletListItem />
						</div>
					</div>
				</div>
			</div>
			<div className='mt-4'>
				<button className='w-full p-3 text-[#25EC13] rounded-[20px] text-[15px]  font-semibold hover:opacity-80 transition bg-[var(--gray)]'>
					Continue
				</button>
			</div>
		</div>
	)
}
