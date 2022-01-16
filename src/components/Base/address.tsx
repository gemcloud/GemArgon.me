import React from 'react'
import { FaCompass } from 'react-icons/fa'

export default function Address() {
	return (
		<div className='w-full d-flex m-2 items-start'>
			<div className='d-flex items-center'>
				<FaCompass />
				<p className='ml-2'>Address: </p>
			</div>
			<div className='ml-1 w-1/2'>
				<p>453 W 12th Ave, Vancouver, BC Canada V5Y 1V4.</p>
			</div>
		</div>
	)
}
