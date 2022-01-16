import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'

export default function Phone() {
	return (
		<>
			<a href='tel:6043587529' className='d-flex items-center m-2'>
				<FaPhoneAlt />
				<p className='ml-2 mb-2'>Phone: 604-333-7777</p>
			</a>
			<a href='tel:604-358-7529' className='d-flex items-center m-2'>
				<FaPhoneAlt />
				<p className='ml-2 mb-2'>call me phone: 604-333-7777</p>
			</a>
		</>
	)
}

// sample Codes:  To order a pizza, <a href="tel:555-666-7777">call us now</a>.
