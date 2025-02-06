//@ts-nocheck
import { NavLink } from 'react-router-dom'
import { ProfileIcon } from '@/shared/icons/profile-icon'
import { ResearchIcon } from '@/shared/icons/research-icon'
import { ToolsIcon } from '@/shared/icons/tools-icon'
import { WalletIcon } from '@/shared/icons/wallet-icon'

export const Nav = () => {
	return (
		<div className='navigation w-full max-w-[450px] mx-auto'>
			<nav className=' flex items-center justify-between w-full bg-[var(--gray)] p-1 text-[10px] rounded-[20px]  z-20 px-4'>
				{/* Wallet */}
				<NavLink
					to='/'
					className={({ isActive }) =>
						`px-4 py-2 flex-col flex items-center gap-0.5 rounded-[16px] ${
							isActive ? 'text-[var(--green)] bg-[var(--black)]' : ''
						}`
					}
				>
					<WalletIcon />
					<p>Wallet</p>
				</NavLink>

				{/* Research */}
				<NavLink
					to='/research'
					className={({ isActive }) =>
						`px-4 py-2 flex-col flex items-center gap-0.5 rounded-[16px] ${
							isActive ? 'text-[var(--green)] bg-[var(--black)]' : ''
						}`
					}
				>
					<ResearchIcon />
					<p>Research</p>
				</NavLink>

				{/* Tools */}
				<NavLink
					to='/tools'
					className={({ isActive }) =>
						`px-4 py-2 flex-col flex items-center gap-0.5 rounded-[16px] ${
							isActive ? 'text-[var(--green)] bg-[var(--black)]' : ''
						}`
					}
				>
					<ToolsIcon />
					<p>Tools</p>
				</NavLink>

				{/* Profile */}
				<NavLink
					to='/profile'
					className={({ isActive }) =>
						`px-4 py-2 flex-col flex items-center gap-0.5 rounded-[16px] ${
							isActive ? 'text-[var(--green)] bg-[var(--black)]' : ''
						}`
					}
				>
					<ProfileIcon />
					<p>Profile</p>
				</NavLink>
			</nav>
		</div>
	)
}
