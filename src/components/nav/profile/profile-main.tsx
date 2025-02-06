// @ts-ignore
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { TeamIcon } from './icon/team'
import { CopyIcon } from '@/shared/icons/for-logic/copy'
import { Referrals } from './referrals'
import { Tariffs } from './tariffs'

export const ProfileMain = () => {
	const [language, setLanguage] = useState('English')

	const [activeProfilePage, setActiveProfilePage] = useState<
		'REFERRALS' | 'TARIFFS' | ''
	>('')

	if (activeProfilePage === 'REFERRALS') {
		return <Referrals />
	}
	if (activeProfilePage === 'TARIFFS') {
		return <Tariffs />
	}

	return (
		<div className='p-4'>
			<p className='title-drawer ml-4 mb-4'>Settings</p>

			<div className='w-full flex flex-col items-center text-center gap-2'>
				<div className='flex w-full items-center gap-1'>
					<div
						className='w-full p-[11px] drawer-block flex items-center justify-center gap-2'
						onClick={() => setActiveProfilePage('REFERRALS')}
					>
						<TeamIcon />
						<p>9</p>
						<p>Referrals</p>
					</div>
					<div className='w-full p-[11px] drawer-block flex items-center justify-center gap-2'>
						<CopyIcon />
						<p>Copy link</p>
					</div>
				</div>

				<div
					className='w-full p-[11px] drawer-block'
					onClick={() => setActiveProfilePage('TARIFFS')}
				>
					Tariffs
				</div>
				<div className='w-full p-[11px] drawer-block'>History</div>

				<div className='flex w-full items-center gap-1'>
					<div className='w-full p-[2px] drawer-block flex items-center justify-between text-center'>
						<span
							className={cn(
								`
								p-[9px] flex-1 profile-span`,
								language === 'English' ? 'profile-span-active' : ''
							)}
							onClick={() => setLanguage('English')}
						>
							English
						</span>
						<span
							className={cn(
								`
								p-[9px] flex-1 profile-span`,
								language === 'Russian' ? 'profile-span-active' : ''
							)}
							onClick={() => setLanguage('Russian')}
						>
							Russian
						</span>
					</div>
				</div>
			</div>

			<p className='mt-8 text-[16px] font-black'>Resources</p>
			<div className='flex items-center gap-2 w-full justify-between mt-[17px]'>
				<div className='drawer-block p-[11px] flex-1 flex items-center gap-2 justify-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='25'
						height='24'
						viewBox='0 0 25 24'
						fill='none'
					>
						<g clip-path='url(#clip0_377_7549)'>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M24.5 12C24.5 18.6274 19.1274 24 12.5 24C5.87258 24 0.5 18.6274 0.5 12C0.5 5.37258 5.87258 0 12.5 0C19.1274 0 24.5 5.37258 24.5 12ZM12.93 8.85893C11.7628 9.3444 9.43014 10.3492 5.93189 11.8733C5.36383 12.0992 5.06626 12.3202 5.03917 12.5363C4.99339 12.9015 5.45071 13.0453 6.07347 13.2411C6.15818 13.2678 6.24595 13.2954 6.33594 13.3246C6.94864 13.5238 7.77283 13.7568 8.20129 13.766C8.58994 13.7744 9.02373 13.6142 9.50264 13.2853C12.7712 11.079 14.4584 9.96381 14.5643 9.93977C14.639 9.92281 14.7426 9.90148 14.8128 9.96385C14.8829 10.0262 14.876 10.1443 14.8686 10.176C14.8233 10.3691 13.0281 12.0381 12.0991 12.9018C11.8095 13.171 11.6041 13.362 11.5621 13.4056C11.468 13.5033 11.3721 13.5958 11.28 13.6846C10.7108 14.2333 10.2839 14.6448 11.3036 15.3168C11.7936 15.6397 12.1858 15.9067 12.577 16.1731C13.0042 16.4641 13.4303 16.7543 13.9816 17.1157C14.1221 17.2077 14.2562 17.3034 14.3869 17.3965C14.8841 17.751 15.3307 18.0694 15.8826 18.0186C16.2032 17.9891 16.5345 17.6876 16.7027 16.7884C17.1002 14.6631 17.8816 10.0585 18.0622 8.16097C18.078 7.99473 18.0581 7.78197 18.0422 7.68857C18.0262 7.59518 17.9928 7.46211 17.8714 7.3636C17.7276 7.24694 17.5056 7.22234 17.4064 7.22408C16.955 7.23203 16.2626 7.47282 12.93 8.85893Z'
								fill='#CCCCCC'
							/>
						</g>
						<defs>
							<clipPath id='clip0_377_7549'>
								<rect
									width='24'
									height='24'
									fill='white'
									transform='translate(0.5)'
								/>
							</clipPath>
						</defs>
					</svg>
					<p>Channel</p>
				</div>
				<div className='drawer-block p-[11px] flex-1 flex items-center gap-2 justify-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='25'
						height='24'
						viewBox='0 0 25 24'
						fill='none'
					>
						<g clip-path='url(#clip0_377_7549)'>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M24.5 12C24.5 18.6274 19.1274 24 12.5 24C5.87258 24 0.5 18.6274 0.5 12C0.5 5.37258 5.87258 0 12.5 0C19.1274 0 24.5 5.37258 24.5 12ZM12.93 8.85893C11.7628 9.3444 9.43014 10.3492 5.93189 11.8733C5.36383 12.0992 5.06626 12.3202 5.03917 12.5363C4.99339 12.9015 5.45071 13.0453 6.07347 13.2411C6.15818 13.2678 6.24595 13.2954 6.33594 13.3246C6.94864 13.5238 7.77283 13.7568 8.20129 13.766C8.58994 13.7744 9.02373 13.6142 9.50264 13.2853C12.7712 11.079 14.4584 9.96381 14.5643 9.93977C14.639 9.92281 14.7426 9.90148 14.8128 9.96385C14.8829 10.0262 14.876 10.1443 14.8686 10.176C14.8233 10.3691 13.0281 12.0381 12.0991 12.9018C11.8095 13.171 11.6041 13.362 11.5621 13.4056C11.468 13.5033 11.3721 13.5958 11.28 13.6846C10.7108 14.2333 10.2839 14.6448 11.3036 15.3168C11.7936 15.6397 12.1858 15.9067 12.577 16.1731C13.0042 16.4641 13.4303 16.7543 13.9816 17.1157C14.1221 17.2077 14.2562 17.3034 14.3869 17.3965C14.8841 17.751 15.3307 18.0694 15.8826 18.0186C16.2032 17.9891 16.5345 17.6876 16.7027 16.7884C17.1002 14.6631 17.8816 10.0585 18.0622 8.16097C18.078 7.99473 18.0581 7.78197 18.0422 7.68857C18.0262 7.59518 17.9928 7.46211 17.8714 7.3636C17.7276 7.24694 17.5056 7.22234 17.4064 7.22408C16.955 7.23203 16.2626 7.47282 12.93 8.85893Z'
								fill='#CCCCCC'
							/>
						</g>
						<defs>
							<clipPath id='clip0_377_7549'>
								<rect
									width='24'
									height='24'
									fill='white'
									transform='translate(0.5)'
								/>
							</clipPath>
						</defs>
					</svg>
					<p>Chat</p>
				</div>
				<div className='drawer-block p-[11px] flex-2 flex items-center gap-2 justify-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
					>
						<path
							d='M18.3263 1.90381H21.6998L14.3297 10.3273L23 21.7898H16.2112L10.894 14.8378L4.80995 21.7898H1.43443L9.31743 12.7799L1 1.90381H7.96111L12.7674 8.25814L18.3263 1.90381ZM17.1423 19.7706H19.0116L6.94539 3.81694H4.93946L17.1423 19.7706Z'
							fill='#CCCCCC'
						/>
					</svg>
				</div>
				<div className='drawer-block p-[11px] flex-2 flex items-center gap-2 justify-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
					>
						<path
							d='M23.7609 7.20005C23.7609 7.20005 23.5266 5.54536 22.8047 4.8188C21.8906 3.86255 20.8688 3.85786 20.4 3.80161C17.0438 3.55786 12.0047 3.55786 12.0047 3.55786H11.9953C11.9953 3.55786 6.95625 3.55786 3.6 3.80161C3.13125 3.85786 2.10938 3.86255 1.19531 4.8188C0.473438 5.54536 0.24375 7.20005 0.24375 7.20005C0.24375 7.20005 0 9.14536 0 11.086V12.9047C0 14.8454 0.239062 16.7907 0.239062 16.7907C0.239062 16.7907 0.473437 18.4454 1.19062 19.1719C2.10469 20.1282 3.30469 20.0954 3.83906 20.1985C5.76094 20.3813 12 20.4375 12 20.4375C12 20.4375 17.0438 20.4282 20.4 20.1891C20.8688 20.1329 21.8906 20.1282 22.8047 19.1719C23.5266 18.4454 23.7609 16.7907 23.7609 16.7907C23.7609 16.7907 24 14.85 24 12.9047V11.086C24 9.14536 23.7609 7.20005 23.7609 7.20005ZM9.52031 15.1125V8.36724L16.0031 11.7516L9.52031 15.1125Z'
							fill='#CCCCCC'
						/>
					</svg>
				</div>
			</div>

			<div className='w-full flex flex-col gap-2 mt-[8px]'>
				<p className='profile-list-item-active profile-list-item'>
					Instructions
				</p>
				<p className='profile-list-item'>Terms & Conditions</p>
				<p className='profile-list-item'>Privacy policy</p>
			</div>
		</div>
	)
}
