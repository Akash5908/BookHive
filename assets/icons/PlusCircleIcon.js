import React from 'react'

export default function PlusCircleIcon({ dimensions }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='#0C111B'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className={dimensions}>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
			/>
		</svg>
	)
}
