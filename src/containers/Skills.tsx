import React, { Fragment } from 'react'
import { UncontrolledTooltip } from 'reactstrap'
import { skillsSection } from '@/../_CmsData/MyPortfolio'
import { PlayLottie } from '@/components/Base/PlayLottie'
import { IlottieData } from '@/types/interfaces/IlottieData'
import * as animationObject from '@/../../public/lottie/webdev.json'

const Skills = () => {
	const lottieData: IlottieData = {
		animationData: animationObject,
	}

	return (
		<div data-aos='fade-in' data-aos-delay='100'>
			<div
				id='mySkills'
				className='container text-center my-5 section section-lg'
			>
				<h1 className='h1'>{skillsSection.title}</h1>
				<p className='lead'>{skillsSection.subTitle}</p>
				<div className='row'>
					<div className='col-lg-6'>
						<PlayLottie animationData={lottieData.animationData} />
					</div>
					<div className='col-lg-6'>
						<div className='d-flex justify-content-center flex-wrap mb-5'>
							{skillsSection.softwareSkills.map(skill => {
								return (
									<Fragment key={skill.skillName}>
										<div
											className='icon icon-lg icon-shape shadow rounded-circle mb-5'
											id={skill.skillName}
											data-bs-toggle='tooltip'
											data-bs-placement='bottom'
											title={skill.skillName}
										>
											<span
												className='iconify'
												data-icon={skill.fontAwesomeClassname}
												data-inline='false'
											></span>
										</div>
										<UncontrolledTooltip
											delay={0}
											placement='bottom'
											target={skill.skillName}
										>
											{skill.skillName}
										</UncontrolledTooltip>
									</Fragment>
								)
							})}
						</div>
						<div>
							{skillsSection.skills.map((skill, i) => {
								return <p key={i}>{skill}</p>
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills

{
	/* <Container className='text-center my-5 section section-lg'>
	<h1 className='h1'>{skillsSection.title}</h1>
	<p className='lead'>{skillsSection.subTitle}</p>
	<Row>
		<Col lg='6'>
			<PlayLottie animationData={lottieData.animationData} />
		</Col>
		<Col lg='6'>
			<div className='d-flex justify-content-center flex-wrap mb-5'>
				{skillsSection.softwareSkills.map(skill => {
					return (
						<Fragment key={skill.skillName}>
							<div
								className='icon icon-lg icon-shape shadow rounded-circle mb-5'
								id={skill.skillName}
							>
								<span
									className='iconify'
									data-icon={skill.fontAwesomeClassname}
									data-inline='false'
								></span>
							</div>
							<UncontrolledTooltip
								delay={0}
								placement='bottom'
								target={skill.skillName}
							>
								{skill.skillName}
							</UncontrolledTooltip>
						</Fragment>
					)
				})}
			</div>
			<div>
				{skillsSection.skills.map((skill, i) => {
					return <p key={i}>{skill}</p>
				})}
			</div>
		</Col>
	</Row>
</Container> */
}
