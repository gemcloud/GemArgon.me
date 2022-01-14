import React from 'react'
// import { Fade } from 'react-reveal'
import { NextPage } from 'next'

interface Props {
	name: string
	desc: string
	github?: string
	link?: string
}

const ProjectsCard: NextPage<Props> = data => {
	return (
		<div className='col-lg-6'>
			{/* <Fade left duration={1000} distance='40px'> */}
			<div data-aos='fade-right' data-aos-delay='300'>
				<div className='card shadow-lg--hover shadow mt-4'>
					<div className='card-body'>
						<div className='d-flex px-3'>
							<div className='pl-4'>
								<h3>{data.name}</h3>
								<p className='description mt-3'>{data.desc}</p>
								{data.github ? (
									<a
										className='btn btn-icon btn-github'
										color='github'
										href={data.github}
										target='_blank'
										aria-label='Github'
										rel='noreferrer'
									>
										<span className='btn-inner--icon'>
											<i className='fa fa-github' />
										</span>
									</a>
								) : null}
								{data.link ? (
									<a
										className='btn btn-icon btn-success'
										color='success'
										target='_blank'
										href={data.link}
										aria-label='Twitter'
										rel='noreferrer'
									>
										<span className='btn-inner--icon'>
											<i className='fa fa-arrow-right mr-2' />
										</span>
										<span className='nav-link-inner--text ml-1'>Demo</span>
									</a>
								) : null}
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* </Fade> */}
		</div>
	)
}

export default ProjectsCard

{
	/* <button target="_blank" rel="noopener" class="btn-icon btn btn-github" aria-label="Github">
	<span class="btn-inner--icon">
		<i class="fa fa-github">
			</i>
	</span>
</button> */
}
