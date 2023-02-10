import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Logo from '../ui/Logo'
import LoginButton from '../ui/LoginButton'
import HamburgerIcon from '../../assets/icons/HamburgerIcon'
import BellIcon from '../../assets/icons/BellIcon'
import SearchIcon from '../../assets/icons/SearchIcon'
import ArrowBackIcon from '../../assets/icons/ArrowBackIcon'
import ChevronLeftIcon from '../../assets/icons/ChevronLeftIcon'
import ChevronRightIcon from '../../assets/icons/ChevronRightIcon'
// import LightmodeIcon from '../../assets/icons/LightmodeIcon'
import DarkmodeIcon from '../../assets/icons/DarkmodeIcon'
import AccountIcon from '../../assets/icons/AccountIcon'
import SettingsIcon from '../../assets/icons/SettingsIcon'
import HelpIcon from '../../assets/icons/HelpIcon'
import FeedbackIcon from '../../assets/icons/FeedbackIcon'
import LogoutIcon from '../../assets/icons/LogoutIcon'
import SearchBar from '../SearchBar'

function Header(props) {
	const [searchBtn, setSearchBtn] = useState(false)
	const [showNavBtn, setShowNavBtn] = useState(false)
	const user = 1
	const windowWidth = 740
	// const windowWidth = window.innerHeight
	// const pageHeight = useState(props.pageRef.current.clientHeight)
	const [opacity, setOpacity] = useState(70)

	const router = useRouter()
	const currentRoute = router.pathname
	const paths = ['login', 'signup', 'discover']
	const showRoute = !paths.find((path) => currentRoute.includes(path))

	const routeClassHandler = (route) => {
		return `flex items-center space-x-4 m-2 lg:my-3 hover:text-white text-${
			(currentRoute.includes(route) && route !== '/') || currentRoute === route
				? 'white'
				: 'gray-400'
		}`
	}

	return (
		<>
			{showRoute && (
				<header className='flex flex-grow sticky top-0 justify-between items-center z-30 bg-black bg-opacity-95'>
					<nav className='container mx-auto p-1'>
						{windowWidth > 720 ? (
							<div className='flex items-center justify-between text-white'>
								<div className='flex lg:hidden items-center space-x-20 w-full'>
									<Logo size={50} />
								</div>
								<div className='hidden lg:flex items-center mx-8 space-x-6 w-full'>
									<Link href={'/'}>
										<button className='rounded-full p-[0.2rem] text-gray-300 hover:text-white bg-gray-700'>
											<ChevronLeftIcon dimensions='h-6 w-6' />
										</button>
									</Link>
									<Link href={'/'}>
										<button className='rounded-full p-[0.2rem] text-gray-300 hover:text-white bg-gray-700'>
											<ChevronRightIcon dimensions='h-6 w-6' />
										</button>
									</Link>
								</div>

								<header className='flex right-8 gap-[0.1rem] md:gap-2 justify-end w-full'>
									{searchBtn ? (
										<div className='w-[30rem]'>
											<SearchBar />
										</div>
									) : (
										<div
											className='flex items-center cursor-pointer p-2'
											onClick={() => setSearchBtn(!searchBtn)}>
											<SearchIcon dimensions='h-7 w-7' />
										</div>
									)}

									<div className='flex items-center space-x-3 cursor-pointer rounded-full pr-2 md:pr-4'>
										{user ? (
											<>
												<div className='flex items-center cursor-pointer p-2 space-x-4 focus:bg-slate-800'>
													<BellIcon dimensions='h-7 w-7' />
												</div>
												<div className='inline-block rounded-xl relative'>
													<div
														className='grid grid-cols-2'
														onClick={() => setShowNavBtn(!showNavBtn)}>
														<HamburgerIcon className='h-7 w-7' />
														{user?.image ? (
															<img
																className='rounded-full p-1 w-8 h-8'
																src={user?.image}
																alt='user image'
															/>
														) : (
															<AccountIcon dimensions='h-7 w-7' />
														)}
													</div>
													{showNavBtn && (
														<div
															className={
																`absolute rounded-lg top-10 right-0 md:right-1 p-2 md:p-3 bg-[#121212] mt-2 border border-gray-900 bg-opacity-100 font-mono text-base lg:text-lg lg:w-24` +
																(!showNavBtn && 'hidden')
															}>
															<Link href='/user/profile'>
																<div className={routeClassHandler('/profile')}>
																	<AccountIcon dimensions='h-7 w-7' />
																	<p>Profile</p>
																</div>
															</Link>
															<button
																id='theme-toggle'
																className='flex space-x-2 ml-2 w-full text-gray-500 dark:text-gray-400 hover:text-white'>
																<DarkmodeIcon dimensions='h-7 w-7' />
																<p>Dark mode</p>
															</button>
															{windowWidth < 1024 && (
																<>
																	<Link href='/user/settings'>
																		<div className={routeClassHandler('/settings')}>
																			<SettingsIcon dimensions='h-7 w-7' />
																			<p>Settings</p>
																		</div>
																	</Link>
																	<hr className='border-t-[0.1px] border-gray-800' />
																	<Link href='/help/faq'>
																		<div className={routeClassHandler('/faq')}>
																			<HelpIcon dimensions='h-7 w-7' />
																			<p>Help</p>
																		</div>
																	</Link>
																	<Link href='/help/donate'>
																		<div className={routeClassHandler('/donate')}>
																			<FeedbackIcon dimensions='h-7 w-7' />
																			<p>Feedback</p>
																		</div>
																	</Link>
																	<hr className='border-t-[0.1px] border-gray-800' />
																</>
															)}
															<Link href='/user/log-out'>
																<div className={routeClassHandler('/log-out')}>
																	<LogoutIcon dimensions='h-7 w-7' />
																	<p>Log out</p>
																</div>
															</Link>
														</div>
													)}
												</div>
											</>
										) : (
											<div className='transform scale-80'>
												<LoginButton />
											</div>
										)}
									</div>
								</header>
							</div>
						) : (
							<>
								<ArrowBackIcon />
								<SearchBar />
							</>
						)}
					</nav>
				</header>
			)}
		</>
	)
}

export default Header
