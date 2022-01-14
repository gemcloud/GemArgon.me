import React from 'react'
import { experience } from '@/../_CmsData/MyPortfolio' // Data
import ExperienceCard from '@/components/ExperienceCard'

const Experience = () => {
	return (
		<section className='section section-lg'>
			<div className='container'>
				{/* <Fade bottom duration={1000} distance='40px'> */}
				<div data-aos='fade-in' data-aos-delay='100'>
					<div className='d-flex p-4'>
						<div>
							<div className='icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info'>
								<i className='ni ni-briefcase-24 text-info' />
							</div>
						</div>
						<div className='pl-4'>
							<h4 className='display-3 text-info'>Experience</h4>
						</div>
					</div>
					<div className='row row-grid align-items-center'>
						{/* {experience.map((data, i) => {
							return <ExperienceCard key={i} data={data} />
						})} 
						TODO: why there is key?
						*/}
						{experience.map((data, i) => {
							return (
								<ExperienceCard
									key={i}
									role={data.role}
									company={data.company}
									companylogo={data.companylogo}
									date={data.date}
									desc={data.desc}
									descBullets={data.descBullets}
								/>
							)
						})}
					</div>
				</div>
				{/* </Fade> */}
			</div>
		</section>
	)
}

export default Experience
