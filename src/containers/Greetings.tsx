import React, { useEffect } from 'react'
import { greetings } from '@/../_CmsData/MyPortfolio'
import { IlottieData } from '@/types/interfaces/IlottieData'
import { PlayLottie } from '@/components/Base/PlayLottie'
import SocialLinks from '@/components/Base/SocialLinks'
import * as animationObject from '@/../../public/lottie/coding.json'

const Greetings = () => {
	const lottieData: IlottieData = {
		animationData: animationObject,
	}
	useEffect(() => {
		// document.documentElement.scrollTop = 0;
		// if (document.scrollingElement != null) document.scrollingElement.scrollTop = 0;
		document.documentElement.scrollTop = 0
		document.scrollingElement!.scrollTop = 0 // Add !
	})
	return (
		<main>
			<div className='position-relative'>
				<section className='section section-lg section-shaped pb-250'>
					<div className='shape shape-style-1 bg-gradient-info'>
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
					</div>
					<div className='container py-lg-md d-flex'>
						<div className='col px-0'>
							<div className='row'>
								<div className='col-lg-6'>
									<h1 className='display-3 text-white'>
										{greetings.title + ' '}
									</h1>
									<p className='lead text-white'>{greetings.description}</p>
									<SocialLinks />
									<div className='btn-wrapper my-4'>
										<a
											className='btn btn-white btn-icon mb-3 mb-sm-0 ml-1'
											color='default'
											href={greetings.resumeLink}
										>
											<span className='btn-inner--icon mr-1'>
												<i className='fa fa-file' />
											</span>
											<span className='btn-inner--text'>See My Resume</span>
										</a>
									</div>
								</div>
								<div className='col-lg-6'>
									<PlayLottie animationData={lottieData.animationData} />
								</div>
							</div>
						</div>
					</div>
					{/* SVG separator */}
					<div className='separator separator-bottom separator-skew'>
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
				{/* 1st Hero Variation */}
			</div>
			<style jsx global>{`
				section {
					display: block;
					padding-top: 4rem;
				}

				.section-shaped {
					position: relative;
					overflow: hidden;
				}
				.section-shaped .shape {
					position: absolute;
					top: 0;
					z-index: -1;
					width: 100%;
					height: 100%;
				}
				.pb-250 {
					padding-bottom: 250px !important;
				}
				.bg-gradient-info {
					background: linear-gradient(
						35deg,
						#11cdef 0,
						#1171ef 100%
					) !important;
				}
			`}</style>
		</main>
	)
}

export default Greetings
