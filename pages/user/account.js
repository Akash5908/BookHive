import { Fragment } from 'react'
import Head from 'next/head'

import LoginBanner from '../../components/login/LoginBanner'
import AccountIcon from '../../assets/icons/AccountIcon'

function AccountPage(props) {
	const user = undefined

	//<button className='flex items-center space-x-2 p-2 font-bold rounded-full justify-center lg:p-4 font-sans shadow-sm px-9 hover:bg-opacity-90 border-[0.5px] border-purple-500 border-1 hover:border-2 shadow-purple-100 transition hover:-translate-y-0.5 duration-150'>
	return (
		<Fragment>
			<Head>
				<title>Account</title>
				<meta name='description' content='Account section' />
			</Head>
			<div className='bg-gradient h-[93vh]'>
				{!user ? (
					<LoginBanner
						title='Access Your Account'
						message='Please login to access your personal account'
						icon={<AccountIcon />}
					/>
				) : (
					<>
						{user?.name ? (
							<img className='rounded-full p-1 w-8 h-8' src={user?.image} alt='user image' />
						) : (
							<AccountIcon dimensions='h-20 w-20' />
						)}
						<h3 className='p-4'>{user.name}</h3>
					</>
				)}
			</div>
		</Fragment>
	)
}

export default AccountPage