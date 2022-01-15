// Implement ContactUs to use www.emailjs.com Sample at "Base/MessageForm.tsx'"
import React from 'react'
import myStyles from '@/styles/ContactMe.module.scss'
// import { ChangeEvent, SyntheticEvent, useState } from 'react'
// import axios from 'axios'

// // Using String Templates
// <div className={`${this.state.className} ${this.props.content.divClassName}}`>

export default function ContactMe() {
	return (
		<div className={myStyles.page}>
			<div
				className={`${myStyles.container} ${myStyles['contact-page']}`}
				style={{ opacity: 1, transform: `scale(1)` }}
			>
				<div className={myStyles['page-bg']}>Contact</div>

				<div className={myStyles['contact-container']}>
					<div className={myStyles['section-title']}>
						Let&#39;s build something great together
					</div>
					<div
						className={`${myStyles['contact-section']} ${myStyles['contact-left']} ${myStyles.left}`}
						style={{ transform: `translateY(0px)`, opacity: 1 }}
					>
						<section>
							<div>
								<span style={{ overflowWrap: `break-word` }}>
									If you are interested in working with me or have any
									questions, don&#39;t hesitate to get in touch with me at{' '}
									<strong place='email'>gemcloud85@gmail.com</strong> or use the
									contact form.
								</span>
							</div>
						</section>
					</div>
					<div
						className={`${myStyles['contact-section']} ${myStyles['contact-right']} ${myStyles.right}`}
						style={{ transform: `translateY(0px)`, opacity: 1 }}
					>
						<div
							className={`${myStyles['d-flex']} ${myStyles['form-container']} `}
						>
							<input
								type='text'
								placeholder='Email'
								className={myStyles['form-control']}
							/>
							<input
								type='text'
								placeholder='Name'
								className={myStyles['form-control']}
							/>
						</div>
						<div className={myStyles['form-container']}>
							<textarea
								cols={30}
								rows={10}
								placeholder='Message'
								className={myStyles['form-control']}
							></textarea>
						</div>
						<p className={myStyles.hpfield}>
							<label>
								Field: <input name='hpfield' />
							</label>
						</p>
						<div className={myStyles['btn-section']}>
							<a
								href='#'
								className={`${myStyles.btn} ${myStyles['btn-sm']} ${myStyles['btn-color']} ${myStyles['send-message']}`}
							>
								SEND
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
