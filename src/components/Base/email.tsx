import React from 'react'
import { FaEnvelope } from 'react-icons/fa'

type Props = {
	email: string
}

export default function Email(propsParam: Props) {
	return (
		<a href={`mailto: ${propsParam.email}`} className='d-flex items-center m-2'>
			<FaEnvelope />
			<p className='ml-2 mb-2'>Email: {propsParam.email}</p>
		</a>
	)
}
