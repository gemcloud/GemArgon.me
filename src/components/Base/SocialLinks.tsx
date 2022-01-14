import React from 'react'

import { socialLinks } from '@/../_CmsData/MyPortfolio'

const SocialLinks = () => {
	return (
		<div className='btn-wrapper text-lg'>
			<a
				className='btn btn-icon-only btn-twitter rounded-circle'
				color='twitter'
				href={socialLinks.twitter}
				target='_blank'
				rel='noopener noreferrer'
				aria-label='Twitter'
			>
				<span className='btn-inner--icon'>
					<i className='fa fa-twitter' />
				</span>
			</a>
			<a
				className='btn btn-icon-only btn-facebook rounded-circle ml-1'
				color='facebook'
				href={socialLinks.facebook}
				target='_blank'
				rel='noopener noreferrer'
				aria-label='Facebook'
			>
				<span className='btn-inner--icon'>
					<i className='fa fa-facebook-square' />
				</span>
			</a>
			<a
				className='btn btn-icon-only btn-instagram rounded-circle ml-1'
				color='instagram'
				href={socialLinks.instagram}
				target='_blank'
				rel='noopener noreferrer'
				aria-label='Instagram'
			>
				<span className='btn-inner--icon'>
					<i className='fa fa-instagram' />
				</span>
			</a>
			<a
				className='btn btn-icon-only btn-github rounded-circle ml-1'
				color='github'
				href={socialLinks.github}
				rel='noopener noreferrer'
				aria-label='Github'
				target='_blank'
			>
				<span className='btn-inner--icon'>
					<i className='fa fa-github' />
				</span>
			</a>
			<a
				className='btn btn-icon-only btn-twitter rounded-circle ml-1'
				color='twitter'
				rel='noopener noreferrer'
				aria-label='Linkedin'
				href={socialLinks.linkedin}
				target='_blank'
			>
				<span className='btn-inner--icon'>
					<i className='fa fa-linkedin' />
				</span>
			</a>
		</div>
	)
}

export default SocialLinks
