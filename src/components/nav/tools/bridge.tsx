import { ArrowReloadIcon } from './icons/arrows-reload'
import { PlusIcon } from './icons/plus'
import { ArrowRightIcon } from './icons/arrow-right'
import { TonIcon } from '@/shared/icons/ton'

export const Bridge = ({
	setActiveMenu,
}: {
	setActiveMenu: (string: string) => void
}) => {
	return (
		<div
			className='tools-main-block text-[12px]'
			onClick={() => setActiveMenu('BRIDGE')}
		>
			<div className='flex flex-col gap-2'>
				<div className='flex items-center gap-2'>
					<ArrowReloadIcon />
					<p className='tools-main-block-title'>Bridge</p>
				</div>

				{/* Блок New bridge */}
				<div className='flex gap-2 '>
					<div className='bg-[#212121] rounded-[12px] p-4  flex-1 flex flex-col justify-between gap-2'>
						{/* Заголовок и кнопка "+" */}
						<div className='flex items-center justify-between mb-2'>
							<h2 className='text-white font-semibold '>New bridge</h2>

							<PlusIcon />
						</div>

						<div className='w-full h-[2px] bg-[#FFF] opacity-10'></div>
						{/* Подпись "Networks:" */}

						{/* Список иконок сетей */}
						<div className='flex items-center justify-between'>
							<p className=' text-gray-400 font-bold'>Networks:</p>

							{/* Контейнер, который "сжимает" иконки друг к другу с перекрытием */}
							<div className='flex -space-x-2'>
								<img
									src='https://s3-alpha-sig.figma.com/img/31f3/e70f/2acdd4dfe0156ea8fec49ad37baf0d66?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TAv-hEBxd8vbynKzZpj7afrIIt7YuztFxxNqRyM3Pc5Wa-NYjx~t-7nmyqKXNSTndMAPoRd~8Tjv~GQKw0yi1Eol4spyylizV44WHs48VSqILoZuCye21XaiXoy5aY1UUch~lirEdzocC6Zurv~VuFmFQ~75v3Znznk-~kFz-Rqtq9j2rn2Uo5Q-qZ7aNVveetyNobQIcE0H2XN3nw4dY3wX1QzwuZnEuQ48BeqtFEmOCyuF697BVQxPAMkbzi~MTn9O3N74yYp4Dc6CwvGXnQzdDs2h8PApFKEu8nS9sMtk4sO8KaGluzijVBzlU7YpSHGaS20Un5L5OY-iwIuM8Q__'
									alt='Ethereum'
									className='w-6 h-6 rounded-full border-2 border-gray-900'
								/>
								<img
									src='https://s3-alpha-sig.figma.com/img/31f3/e70f/2acdd4dfe0156ea8fec49ad37baf0d66?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TAv-hEBxd8vbynKzZpj7afrIIt7YuztFxxNqRyM3Pc5Wa-NYjx~t-7nmyqKXNSTndMAPoRd~8Tjv~GQKw0yi1Eol4spyylizV44WHs48VSqILoZuCye21XaiXoy5aY1UUch~lirEdzocC6Zurv~VuFmFQ~75v3Znznk-~kFz-Rqtq9j2rn2Uo5Q-qZ7aNVveetyNobQIcE0H2XN3nw4dY3wX1QzwuZnEuQ48BeqtFEmOCyuF697BVQxPAMkbzi~MTn9O3N74yYp4Dc6CwvGXnQzdDs2h8PApFKEu8nS9sMtk4sO8KaGluzijVBzlU7YpSHGaS20Un5L5OY-iwIuM8Q__'
									alt='Solana'
									className='w-6 h-6 rounded-full border-2 border-gray-900'
								/>
								<img
									src='https://s3-alpha-sig.figma.com/img/31f3/e70f/2acdd4dfe0156ea8fec49ad37baf0d66?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TAv-hEBxd8vbynKzZpj7afrIIt7YuztFxxNqRyM3Pc5Wa-NYjx~t-7nmyqKXNSTndMAPoRd~8Tjv~GQKw0yi1Eol4spyylizV44WHs48VSqILoZuCye21XaiXoy5aY1UUch~lirEdzocC6Zurv~VuFmFQ~75v3Znznk-~kFz-Rqtq9j2rn2Uo5Q-qZ7aNVveetyNobQIcE0H2XN3nw4dY3wX1QzwuZnEuQ48BeqtFEmOCyuF697BVQxPAMkbzi~MTn9O3N74yYp4Dc6CwvGXnQzdDs2h8PApFKEu8nS9sMtk4sO8KaGluzijVBzlU7YpSHGaS20Un5L5OY-iwIuM8Q__'
									alt='Binance'
									className='w-6 h-6 rounded-full border-2 border-gray-900'
								/>
								<img
									src='https://s3-alpha-sig.figma.com/img/31f3/e70f/2acdd4dfe0156ea8fec49ad37baf0d66?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TAv-hEBxd8vbynKzZpj7afrIIt7YuztFxxNqRyM3Pc5Wa-NYjx~t-7nmyqKXNSTndMAPoRd~8Tjv~GQKw0yi1Eol4spyylizV44WHs48VSqILoZuCye21XaiXoy5aY1UUch~lirEdzocC6Zurv~VuFmFQ~75v3Znznk-~kFz-Rqtq9j2rn2Uo5Q-qZ7aNVveetyNobQIcE0H2XN3nw4dY3wX1QzwuZnEuQ48BeqtFEmOCyuF697BVQxPAMkbzi~MTn9O3N74yYp4Dc6CwvGXnQzdDs2h8PApFKEu8nS9sMtk4sO8KaGluzijVBzlU7YpSHGaS20Un5L5OY-iwIuM8Q__'
									alt='Tron'
									className='w-6 h-6 rounded-full border-2 border-gray-900'
								/>
							</div>
						</div>
					</div>

					{/* Блок Last used */}
					<div className='bg-[#212121] rounded-[12px] p-4 flex-1 flex flex-col justify-between gap-2'>
						{/* Заголовок и кнопка ">" */}

						<div className='flex items-center justify-between mb-2'>
							<h2 className='text-white font-bold'>Last used</h2>

							<ArrowRightIcon />
						</div>

						{/* line */}
						<div className='w-full h-[2px] bg-[#FFF] opacity-10'></div>

						{/* Сеть + адрес */}
						<div className='flex items-center '>
							{/* Замените src на реальные иконки */}
							<TonIcon />
							<div className='w-[11px] h-[2px] bg-[#FFF]'></div>
							<TonIcon />

							<span className='text-white font-mono  ml-1'>Td3T1...6Dfe3</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
