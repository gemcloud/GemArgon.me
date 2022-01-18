import React from 'react'
import { FaCompass } from 'react-icons/fa'

type Props = {
	address: string
}

export default function Address(propsParam: Props) {
	return (
		<div className='w-full d-flex m-2 items-start'>
			<div className='d-flex items-center'>
				<FaCompass />
				<p className='ml-2'>Address: </p>
			</div>
			<div className='ml-1 w-1/2'>
				<p>{propsParam.address}</p>
			</div>
		</div>
	)
}
