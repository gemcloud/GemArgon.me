import React from 'react'
import { FaEnvelope } from 'react-icons/fa'

export default function Email() {
	return (
		<a href='mailto:gemcloud85@gmail.com' className='d-flex items-center m-2'>
			<FaEnvelope />
			<p className='ml-2 mb-2'>Email: gemcloud85@gmail.com</p>
		</a>
	)
}
