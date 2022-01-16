import React from 'react'
import Phone from '@/components/Base/phone'
import Email from '@/components/Base/email'
import Address from '@/components/Base/address'
import MessageForm from '@/components/Base/MessageForm'

const ContactMe = () => {
	return (
		<div className='container section section-lg'>
			<div data-aos='fade-in' data-aos-delay='100'>
				<div className='row'>
					<div className='col-lg-6'>
						<h3 className='h3'>Contact me</h3>
						{/* Contact me */}
						<Phone />
						<Email />
						<Address />
					</div>
					<div className='col-lg-6'>
						{/* message form */}
						<MessageForm />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactMe
