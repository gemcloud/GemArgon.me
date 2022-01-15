import React from 'react'
// import styled from 'styled-components'
import myStyles from './SimpleFooter.module.scss'

function SimpleFooter() {
	return (
		<>
			{/* <div className={styles['Event-Entries']}></div> style['class-name'] */}
			<footer id='colophon' className={myStyles['site-footer']}>
				<div className={myStyles.container}>
					<div className={myStyles['site-info']}>
						<span>Copyright © 2021 Gem Cloud. All rights reserved.</span>

						<span>
							Built and maintained by{' '}
							<a href='https://github.com/gemcloud/gemcloud'>Gem Cloud</a>
						</span>
					</div>
					{/* <!-- .site-info --> */}
				</div>
			</footer>
		</>
	)
}

export default SimpleFooter
