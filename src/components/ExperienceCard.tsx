import React from 'react'
import Color from 'color-thief-react'
import Image from 'next/image'

type ExperienceType = {
	role: string
	company: string
	companylogo: string
	date: string
	desc: string
	descBullets?: string[]
}

const ExperienceCard = (data: ExperienceType) => {
	return (
		<div className='col-lg-4'>
			{/* <Fade left duration={1000} distance='40px'> */}
			<div data-aos='fade-left' data-aos-delay='400'>
				<div
					style={{ flex: 1 }}
					className='shadow-lg--hover shadow border-0 text-center rounded card'
				>
					<Color src={data.companylogo} format='hex'>
						{color => (
							<div className='card-header' style={{ background: color.data }}>
								<h5 className='text-white'>{data.company}</h5>
							</div>
						)}
					</Color>
					<div className='py-5 card-body'>
						<div
							className='bg-white rounded-circle mb-3 img-center img-fluid shadow-lg '
							style={{ width: '100px', height: '100px' }}
						>
							<Image
								src={data.companylogo}
								width={'100px'}
								height={'100px'}
								alt={data.companylogo}
							/>
						</div>
						<h5 className='card-title'>{data.role}</h5>
						<div className='card-subtitle'>{data.date}</div>
						<div className='description my-3 text-left card-text'>
							{data.desc}
							<ul>
								{data.descBullets
									? data.descBullets.map(desc => {
											return <li key={desc}>{desc}</li>
									  })
									: null}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ExperienceCard
