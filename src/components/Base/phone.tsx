/*
The feature auto call phone call on cell phone!
HTML sample Codes:  <div>To order a pizza, <a href="tel:555-666-7777">call us now</a><div>
*/
import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'

type Props = {
	phonenumber: string
}

// const Index = ({ allPosts }: Props) => {

export default function Phone(propsParam: Props) {
	return (
		<>
			<a
				href={`tel: ${propsParam.phonenumber}`}
				className='d-flex items-center m-2'
			>
				<FaPhoneAlt />
				<p className='ml-2 mb-2'>Phone: {propsParam.phonenumber}</p>
			</a>
		</>
	)
}
