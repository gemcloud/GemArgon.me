// CSS & Fonts libs

// Bootstrap 5 Modules
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.css'
// import '@/styles/TestingHeader.css'
// import '@/styles/globals.scss'
import '@/styles/argon-design-system-react.css'
import '../styles/styles.css'
import '@/styles/vendor/nucleo/css/nucleo.css'
import '@/styles/vendor/font-awesome/css/font-awesome.min.css'

import React from 'react'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import AOS from 'aos'
import 'aos/dist/aos.css' // import aos styles

// import 'bootstrap/dist/js/bootstrap.min.js'
// import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js'

function MyApp({ Component, pageProps }: AppProps) {
	// #### import bootstrap-js-libs below for _app.js   ####
	useEffect(() => {
		typeof document !== undefined
			? require('bootstrap/dist/js/bootstrap')
			: null
	}, [])
	// #### Initialize AOS with your page   ####
	useEffect(() => {
		// here you can add your aos options
		AOS.init({
			offset: 100,
		})
	}, [])

	// useEffect(() => {
	// 	// init tooltip
	// 	Array.from(
	// 		document.querySelectorAll('button[data-bs-toggle="tooltip"]')
	// 	).forEach(tooltipNode => new Tooltip(tooltipNode))
	// })
	// return (
	// 	<div className='container p-5'>
	// 		<h1 className='mb-5'>Therichpost.com</h1>
	// 		<button
	// 			type='button'
	// 			className='btn btn-secondary me-2'
	// 			data-bs-toggle='tooltip'
	// 			data-bs-placement='top'
	// 			title='Tooltip on top'
	// 		>
	// 			Tooltip on top
	// 		</button>
	// 		<button
	// 			type='button'
	// 			className='btn btn-secondary me-2'
	// 			data-bs-toggle='tooltip'
	// 			data-bs-placement='right'
	// 			title='Tooltip on right'
	// 		>
	// 			Tooltip on right
	// 		</button>
	// 		<button
	// 			type='button'
	// 			className='btn btn-secondary me-2'
	// 			data-bs-toggle='tooltip'
	// 			data-bs-placement='bottom'
	// 			title='Tooltip on bottom'
	// 		>
	// 			Tooltip on bottom
	// 		</button>
	// 		<button
	// 			type='button'
	// 			className='btn btn-secondary me-2'
	// 			data-bs-toggle='tooltip'
	// 			data-bs-placement='left'
	// 			title='Tooltip on left'
	// 		>
	// 			Tooltip on left
	// 		</button>
	// 	</div>
	// )

	return <Component {...pageProps} />
}

export default MyApp
