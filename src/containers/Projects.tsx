import React from 'react'

import { projects } from '@/../_CmsData/MyPortfolio'
import ProjectsCard from '../components/ProjectsCard'

const Projects = () => {
	return (
		<section className='section section-lg' id='myProjects'>
			<div className='container'>
				{/* <Fade bottom duration={1000} distance='40px'> */}
				<div data-aos='fade-in' data-aos-delay='100'>
					<div className='d-flex p-4'>
						<div>
							<div className='icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info'>
								<i className='ni ni-laptop text-info' />
							</div>
						</div>
						<div className='pl-4'>
							<h4 className='display-3 text-info'>Projects</h4>
						</div>
					</div>
					<div className='row row-grid align-items-center'>
						{projects.map((data, i) => {
							// return <ProjectsCard key={i} data={data} />
							return (
								<ProjectsCard
									key={i}
									name={data.name}
									desc={data.desc}
									github={data.github}
									link={data.link}
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

export default Projects
