import { feedbacks } from '@/../_CmsData/MyPortfolio'
import React from 'react'
import FeedbackCard from '../components/FeedbackCard'

const Feedbacks = () => {
	return (
		<section className='section section-lg'>
			<div className='container'>
				{/* <Fade bottom duration={1000} distance='40px'> */}
				<div data-aos='fade-in' data-aos-delay='100'>
					<div className='d-flex p-4'>
						<div>
							<div className='icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info'>
								<i className='fa fa-star text-info' />
							</div>
						</div>
						<div className='pl-4'>
							<h4 className='display-3 text-info'>Our Clients Feedback</h4>
						</div>
					</div>
					<div className='row row-grid align-items-center'>
						{feedbacks.map((data, i) => {
							return (
								<div className='col-lg-6' key={i}>
									<FeedbackCard name={data.name} feedback={data.feedback} />
								</div>
							)
						})}
					</div>
				</div>
				{/* </Fade> */}
			</div>
		</section>
	)
}

export default Feedbacks
