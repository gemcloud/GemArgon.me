import styles from '@/styles/MessageForm.module.scss'
import React from 'react'
import { useState, useReducer } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'
import { greetings } from '@/../_CmsData/MyPortfolio'

const initialState = {
	userName: '',
	userEmail: '',
	message: '',
}

function reducer(state: any, action: any) {
	switch (action.type) {
		case 'name':
			return { ...state, userName: action.value }
		case 'email':
			return { ...state, userEmail: action.value }
		case 'message':
			return { ...state, message: action.value }
		default:
			throw new Error()
	}
}

export default function MessageForm() {
	const [formState, dispatch] = useReducer(reducer, initialState)
	const [showFormErr, setShowFormErr] = useState(false)
	const [formSubmitted, setFormSubmitted] = useState({
		title: '',
		paragraph: '',
	})
	const [showCaptcha, setShowCaptcha] = useState(false)
	const { userName, userEmail, message } = formState

	const submitFormAndShowCaptcha = (e: any) => {
		e.preventDefault()
		setShowCaptcha(true)
	}

	const sendEmail = (captchaValue: any) => {
		if (userName === '' || userEmail === '' || message === '') {
			setShowFormErr(true)
			return
		}

		const params = {
			...formState,
			'g-recaptcha-response': captchaValue,
		}

		setFormSubmitted({ title: 'Sending message...', paragraph: '' })
		emailjs
			.send(
				process.env.EMAIL_JS_SERVICE || '',
				process.env.EMAIL_JS_TEMPLATE || '',
				params,
				process.env.EMAIL_JS_USER || ''
			)
			.then(
				({ status }) => {
					if (status === 200) {
						setFormSubmitted({
							title: 'Message has been sent',
							paragraph:
								'Thanks! ' +
								greetings.name +
								' will be in contact with you soon.',
						})
					} else {
						setFormSubmitted({
							title:
								'Unexpected status code returned from EmailJS, try again later',
							paragraph:
								'Please contact ' +
								greetings.name +
								' either by phone ' +
								greetings.cellphone +
								' or email ' +
								greetings.email +
								'.',
						})
					}
				},
				err => {
					// eslint-disable-next-line no-console
					console.log(err)
					setFormSubmitted({
						title: 'Error sending message, try again later',
						paragraph:
							'Please contact ' +
							greetings.name +
							' either by phone ' +
							greetings.cellphone +
							' or email ' +
							greetings.email +
							'.',
					})
				}
			)
	}

	return formSubmitted.title === '' ? (
		<div className={`${styles.container}`}>
			<h3 className='text-lato text-2xl font-light'>Send me a message</h3>
			{!showCaptcha ? (
				<form onSubmit={submitFormAndShowCaptcha}>
					<div className='form-group'>
						<label htmlFor='name'></label>
						<input
							type='text'
							className='form-control'
							id='name'
							name='name'
							placeholder='Full Name'
							value={userName}
							onChange={e => dispatch({ type: 'name', value: e.target.value })}
							required
						/>
						<span className={`${styles.icon} fa fa-user fa-lg`}></span>
					</div>

					<div className='form-group'>
						<label htmlFor='email'></label>
						<input
							type='email'
							className='form-control'
							id='email'
							name='email'
							placeholder='Email Address'
							value={userEmail}
							onChange={e => dispatch({ type: 'email', value: e.target.value })}
							required
						/>
						<span className={`${styles.icon} fa fa-envelope fa-lg`}></span>
					</div>
					<div className='form-group'>
						<textarea
							rows={5}
							cols={30}
							id='msg'
							name='msg'
							placeholder='Message'
							value={message}
							onChange={e =>
								dispatch({ type: 'message', value: e.target.value })
							}
							required
							style={{ width: '100%' }}
						></textarea>
						<span
							className={`${styles['icon-textarea']} fa fa-paper-plane fa-lg`}
						></span>
					</div>

					<div className='form-group col-sm-12 text-center'>
						{showFormErr ? (
							<p className='sm:mr-4 text-red-400'>
								Please fill in all three input boxes to send a message
							</p>
						) : null}
						<button className={`btn ${styles['btn-default']}`} type='submit'>
							Send
						</button>
					</div>
				</form>
			) : (
				<ReCAPTCHA
					sitekey={process.env.CAPTCHA_SITE_KEY || ''}
					onChange={sendEmail}
				/>
			)}
		</div>
	) : (
		<div className='flex flex-col items-center'>
			<h3 className='text-lato text-2xl font-light text-white'>
				{formSubmitted.title}
			</h3>
			<p>{formSubmitted.paragraph}</p>
		</div>
	)
}
