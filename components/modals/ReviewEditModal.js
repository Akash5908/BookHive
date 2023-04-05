import { useState, useContext } from 'react'
import { useRouter } from 'next/router'

import SnackbarContext from '../../store/snackbarContext'
import ButtonSpinner from '../widgets/ButtonSpinner'
import StarIcon from '../../assets/icons/StarIcon'
// import CloseIcon from '../../assets/icons/CloseIcon'

function ReviewEditModal({ reviewUpdateMethod, setEditReview, setDialogHandler, setSubmitHandler }) {
	const snackbarCtx = useContext(SnackbarContext)
	const [rating, setRating] = useState(0)
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [loading, setLoading] = useState(false)

	const router = useRouter()
	const bookId = router.asPath.split('books/')[1]

	const submitHandler = async (e) => {
		e.preventDefault()
		setLoading(true)
		const review = await reviewUpdateMethod({ bookId, title, description })
		if (review.data) {
			setDialogHandler(true)
			setSubmitHandler(true)
			setEditReview(false)
		} else {
			snackbarCtx.addMessage({ title: review })
		}
		setLoading(false)
	}

	return (
		<div className='relative flex flex-col items-center justify-center w-screen md:w-2/3 lg:2/5 p-4 xl:p-8 z-10 bg-[#0C111B] bg-opacity-10'>
			<h1 className='font-semibold text-lg w-full my-4'>Add a new review</h1>
			<form className='w-full my-4'>
				<fieldset className='flex gap-1 justify-start'>
					<div className='cursor-pointer' onClick={() => setRating(1)}>
						<StarIcon dimensions='h-8 w-8' color={rating >= 1 ? '#ffca28' : 'none'} />
					</div>
					<div className='cursor-pointer' onClick={() => setRating(2)}>
						<StarIcon dimensions='h-8 w-8' color={rating >= 2 ? '#ffca28' : 'none'} />
					</div>
					<div className='cursor-pointer' onClick={() => setRating(3)}>
						<StarIcon dimensions='h-8 w-8' color={rating >= 3 ? '#ffca28' : 'none'} />
					</div>
					<div className='cursor-pointer' onClick={() => setRating(4)}>
						<StarIcon dimensions='h-8 w-8' color={rating >= 4 ? '#ffca28' : 'none'} />
					</div>
					<div className='cursor-pointer' onClick={() => setRating(5)}>
						<StarIcon dimensions='h-8 w-8' color={rating >= 5 ? '#ffca28' : 'none'} />
					</div>
				</fieldset>
				<div className='w-full my-4'>
					<input
						value={title}
						onChange={(e) => {
							setTitle(e.target.value)
						}}
						placeholder='Enter a title of your review'
						type='text'
						className='input-field'
					/>
					<div className='flex justify-end w-full'>
						<p className='text-sm text-gray-400'>maximum 50 characters</p>
					</div>
				</div>
				<div className='w-full my-4'>
					<textarea
						value={description}
						onChange={(e) => {
							setDescription(e.target.value)
						}}
						placeholder='What did you like or dislike?'
						rows='4'
						className='w-full rounded-md p-4 text-lg placeholder:font-sans placeholder:font-light bg-gray-900 border-[.8px] border-gray-700 focus:border-[.2px] focus:border-[#8C6AFF]'
					/>
					<div className='flex justify-end w-full'>
						<p className='text-sm text-gray-400'>minimum 50 characters</p>
					</div>
				</div>
				<div className='flex items-center justify-between my-3 md:my-6'>
					<button
						onClick={() => setEditReview(false)}
						className='text-center px-3 py-2 border border-[#8C6AFF] rounded-3xl'>
						<span>Cancel</span>
					</button>
					<button
						onClick={submitHandler}
						className={title.length <= 50 && description.length >= 50 ? 'btn-next' : 'btn-next-inactive'}>
						{loading ? <ButtonSpinner /> : <span>Submit review</span>}
					</button>
				</div>
			</form>
			{/* <div className='group absolute top-3 right-4 xl:top-8 xl:right-8 p-1 flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full hover:cursor-pointer hover:-translate-y-0.5 transition duration-150'>
				<CloseIcon />
			</div> */}
		</div>
	)
}

export default ReviewEditModal
