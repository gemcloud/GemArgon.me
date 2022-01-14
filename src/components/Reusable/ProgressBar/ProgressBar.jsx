import * as React from 'react'

// import './ProgressBar.module.css'

// export const ProgressBar = ({ width, percent, status }) => {
// eslint-disable-next-line react/prop-types
const ProgressBar = ({ width, percent, status }) => {
	// const [value, setValue] = React.useState(0)

	// React.useEffect(() => {
	// 	setValue((percent / 100) * width)
	// })

	return (
		<div className={'progress'} role='progressbar' aria-label='Frontend/Design'>
			{/* <h1 className='percent-number'>{status}</h1> */}
			{/* <div className='progress-div' style={{ width: width }}>
				<div style={{ width: `${value}px` }} className='progress' />
			</div> */}
			{/* <div className='progress-bar bg-info' style={{ width: width }}></div> */}
			<div
				className='progress-bar bg-info'
				style={{ width: `${percent}%` }}
				role='progressbar'
			/>
		</div>
	)
}

export { ProgressBar }
