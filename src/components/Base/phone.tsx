import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'

export default function Phone() {
	return (
		<a href='tel:+6043587529' className='d-flex items-center m-2'>
			<FaPhoneAlt />
			<p className='ml-2 mb-2'>Phone: 604-333-7777</p>
		</a>
	)
}
