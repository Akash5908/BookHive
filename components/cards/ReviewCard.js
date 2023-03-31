import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

import AccountIcon from '../../assets/icons/AccountIcon'
import ChevronUpIcon from '../../assets/icons/ChevronUpIcon'
import ChevronDownIcon from '../../assets/icons/ChevronDownIcon'
import StarIcon from '../../assets/icons/StarIcon'

function ReviewCard(props) {
	const { rating, title, description, user, createdAt } = props.review
	const [readMore, setReadMore] = useState(false)
	const [descLines, setDescLines] = useState(0)
	const descRef = useRef(null)

	const readMoreDescHandler = () => {
		const descEl = descRef.current
		if (descEl) {
			descEl.style.display = 'inline'
			setDescLines(descEl.getClientRects().length)
			descEl.style.display = '-webkit-box'
		}
	}

	useEffect(() => {
		if (typeof window !== 'undefined' && descRef) {
			readMoreDescHandler()
			window.addEventListener('orientationchange', readMoreDescHandler, false) // descLines incorrect value
		}
	}, [descRef?.current])

	return (
		<div className='flex flex-col relative rounded-lg bg-gray-900 my-4 xl:my-8'>
			{/* {user.image ? (
					<Image
						src={process.env.USERS_URL + user.image}
						alt={title}
						height={80}
						width={80}
						className='object-contain rounded-lg w-32 h-32 p-1'
					/>
				) : (
					<AccountIcon dimensions='h-10 w-10' />
				)} */}
			<div className='flex items-start justify-start gap-2'>
				<div className='flex items-center justify-start text-md md:text-lg text-xl w-fit px-2 py-1 font-medium bg-[#192132] rounded-lg'>
					<div className='mr-1 xl:mr-2'>
						<StarIcon dimensions='h-6 w-6' />
					</div>
					{rating}
				</div>
				<div className='flex items-center flex-wrap font-semibold text-lg leading-5 line-clamp-2 p-2'>
					{title}
				</div>
			</div>
			<div className='flex flex-col justify-center h-full p-2 text-white'>
				<p
					ref={descRef}
					className={
						'text-md text-gray-200 font-medium sm:leading-snug leading-normal ' +
						(!readMore ? 'line-clamp-4' : '')
					}>
					{description}
				</p>
				<button
					onClick={(e) => {
						setReadMore(!readMore)
						e.preventDefault()
					}}
					className={
						'cursor-pointer text-sm xl:text-sm font-semibold text-[#8C6AFF] underline decoration-1 decoration-gray-300 underline-offset-4 ' +
						(descLines <= 4 ? 'hidden' : '')
					}>
					{readMore ? (
						<div className='flex'>
							Read less <ChevronUpIcon dimensions='h-5 w-5' />
						</div>
					) : (
						<div className='flex'>
							Read more{' '}
							<div className='py-[.1rem]'>
								<ChevronDownIcon dimensions='h-5 w-5' />
							</div>
						</div>
					)}
				</button>
				<div className='flex justify-start items-start py-3 rounded-lg divide-x divide-gray-600 gap-4'>
					<div className='font-medium'>{user.name}</div>
					<div className='px-4'>{createdAt.split('T')[0]}</div>
				</div>
			</div>
		</div>
	)
}

export default ReviewCard