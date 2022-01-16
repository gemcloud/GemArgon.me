import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { greetings } from '@/../_CmsData/MyPortfolio'
import Headroom from 'headroom.js'

const NavigationArgon = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
	// const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)
	const collapseStyle = mobileMenuOpen ? 'show' : ''

	useEffect(() => {
		const headroom = new Headroom(document.getElementById('navbar-main')!)
		// initialise
		headroom.init()
	})

	return (
		<>
			<nav
				id='navbar-main'
				className='navbar navbar-expand-lg navbar-transparent navbar-light headroom'
			>
				{/* <div className='container-fluid'> */}
				<div className='container'>
					<a href='#' className='mr-lg-5 navbar-brand'>
						<h2 className='text-white' id='nav-title'>
							{greetings.name}
						</h2>
					</a>
					<button
						className='navbar-toggler ms-auto'
						type='button'
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						<span className='navbar-toggler-icon'></span>
					</button>

					<div
						className={`collapse navbar-collapse ${collapseStyle}`}
						id='collapseNavbar'
					>
						{/* mobile menu header */}
						<div className='navbar-collapse-header'>
							<div className='row'>
								<div className='collapse-brand col-6'>
									<a
										href='#'
										className='mr-lg-5 navbar-brand'
										onClick={() =>
											setMobileMenuOpen(
												mobileMenuOpen ? !mobileMenuOpen : false
											)
										}
									>
										<h3 className='text-black' id='nav-title'>
											{greetings.name}
										</h3>
									</a>
								</div>
								<div className='collapse-close col-6'>
									<button
										className='navbar-toggler'
										id='navbar_global'
										onClick={() =>
											setMobileMenuOpen(
												mobileMenuOpen ? !mobileMenuOpen : false
											)
										}
									>
										<span></span>
										<span></span>
									</button>
								</div>
							</div>
						</div>
						<ul className='navbar-nav ms-auto'>
							<li className='nav-item active'>
								<Link href={'#mySkills'}>
									<a
										className='nav-link'
										onClick={() =>
											setMobileMenuOpen(
												mobileMenuOpen ? !mobileMenuOpen : false
											)
										}
									>
										Skills
									</a>
								</Link>
							</li>
							<li className='nav-item'>
								<Link href={'#myEducation'}>
									<a
										className='nav-link'
										onClick={() =>
											setMobileMenuOpen(
												mobileMenuOpen ? !mobileMenuOpen : false
											)
										}
									>
										Education
									</a>
								</Link>
							</li>
							<li className='nav-item'>
								<Link href={'#myProjects'}>
									<a
										className='nav-link'
										// data-bs-toggle='collapse'
										onClick={() =>
											setMobileMenuOpen(
												mobileMenuOpen ? !mobileMenuOpen : false
											)
										}
									>
										Projects
									</a>
								</Link>
							</li>
							<li className='nav-item'>
								<a
									className='nav-link'
									href=''
									data-bs-target='#myModal'
									data-bs-toggle='modal'
									onClick={() =>
										setMobileMenuOpen(mobileMenuOpen ? !mobileMenuOpen : false)
									}
								>
									About
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div id='myModal' className='modal fade' role='dialog' aria-hidden='true'>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h3 id='myModalLabel'>Modal header</h3>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-hidden='true'
							></button>
						</div>
						<div className='modal-body'>
							<p>One fine body…</p>
						</div>
						<div className='modal-footer'>
							<button
								className='btn'
								data-bs-dismiss='modal'
								aria-hidden='true'
							>
								Close
							</button>
							<button className='btn btn-primary'>Save changes</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default NavigationArgon
