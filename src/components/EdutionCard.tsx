import React from 'react'

interface IEducation {
	schoolName: string
	subHeader: string
	duration: string
	desc: string
	descBullets: string[]
}

// const Hamburger = (param: ToggleProps) => {
const EdutionCard = (education: IEducation) => {
	return (
		<div>
			{/* <Fade left duration={1000} distance='40px'> */}
			<div data-aos='fade-left' data-aos-delay='400'>
				<div className='card-lift--hover shadow mt-4 card'>
					<div className='card-body'>
						<div className='d-flex px-3'>
							<div className='pl-4'>
								<h5 className='text-info'>{education.schoolName}</h5>
								<h6>{education.subHeader}</h6>
								<span className='mr-1 badge bg-info'>{education.duration}</span>
								<p className='description mt-3'>{education.desc}</p>
								<ul>
									{education.descBullets
										? education.descBullets.map((desc: string) => {
												return <li key={desc}>{desc}</li>
										  })
										: null}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EdutionCard
