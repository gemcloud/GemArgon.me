import React from 'react'
import EdutionCard from '@/components/EdutionCard'
import { educationInfo } from '@/../_CmsData/MyPortfolio'

const Education = () => {
	return (
		<section id='myEducation' className='section pb-0 bg-gradient-info my-5'>
			<div className='container'>
				<div className='d-flex px-3'>
					<div>
						<div className='icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info'>
							<i className='ni ni-books text-info' />
						</div>
					</div>
					<div className='pl-4'>
						<h4 className='display-3 text-white'>Education</h4>
					</div>
				</div>
				<div className='row row-grid align-items-center'>
					{educationInfo.map(info => {
						return (
							<div className='order-lg-1 col-lg-6' key={info.schoolName}>
								<EdutionCard
									schoolName={info.schoolName}
									subHeader={info.subHeader}
									duration={info.duration}
									desc={info.desc}
									descBullets={info.descBullets}
								/>
							</div>
						)
					})}
				</div>
			</div>
			<div className='separator separator-bottom separator-skew zindex-100'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					preserveAspectRatio='none'
					version='1.1'
					viewBox='0 0 2560 100'
					x='0'
					y='0'
				>
					<polygon className='fill-white' points='2560 0 2560 100 0 100' />
				</svg>
			</div>
		</section>
	)
}

export default Education
