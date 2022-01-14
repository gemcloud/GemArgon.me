import React from 'react'

type FeedbackTyep = {
	name: string
	feedback: string
}

const FeedbackCard = (data: FeedbackTyep) => {
	return (
		// <Fade left duration={1000} distance='40px'>
		<div data-aos='fade-left' data-aos-delay='400'>
			<div className='card card-lift--hover shadow mt-4'>
				<div className='card-body'>
					<div className='d-flex px-3'>
						<div className='pl-4'>
							<h5 className='text-info'>{data.name}</h5>
							<p className='description mt-3'>{data.feedback}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FeedbackCard
