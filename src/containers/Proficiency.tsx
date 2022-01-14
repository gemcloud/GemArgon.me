import React from 'react'
import { SkillBars } from '@/../_CmsData/MyPortfolio'
import * as animationObject from '@/../../public/lottie/build.json'
import { IlottieData } from '@/types/interfaces/IlottieData'
import { PlayLottie } from '@/components/Base/PlayLottie'
import { ProgressBar } from '@/components/Reusable/ProgressBar/ProgressBar'

const Proficiency = () => {
	const lottieData: IlottieData = {
		animationData: animationObject,
	}
	return (
		<div className='container section section-lg'>
			{/* <Fade bottom duration={1000} distance='40px'> */}
			<div data-aos='fade-in' data-aos-delay='100'>
				<div className='row'>
					<div className='col-lg-6'>
						<h1 className='h1'>Proficiency</h1>
						{SkillBars.map(skill => {
							return (
								<div className='progress-info' key={skill.Stack}>
									<div className='progress-label'>
										<span>{skill.Stack}</span>
									</div>
									<div className='progress-percentage'>
										<span>{skill.progressPercentage}%</span>
									</div>
									<ProgressBar
										width={600}
										percent={skill.progressPercentage}
										status={skill.Stack}
									/>
								</div>
							)
						})}
					</div>
					<div className='col-lg-6'>
						<PlayLottie animationData={lottieData.animationData} />
					</div>
				</div>
			</div>
			{/* </Fade> */}
		</div>
	)
}

export default Proficiency
