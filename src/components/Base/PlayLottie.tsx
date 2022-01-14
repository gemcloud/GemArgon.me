import React from 'react'
import Lottie from 'react-lottie-player'
import { IlottieData } from '@/types/interfaces/IlottieData'

export const PlayLottie: React.FC<IlottieData> = props => {
	// const defaultOptions = {
	// 	loop: true,
	// 	autoplay: true,
	// 	animationData: props.animationData,
	// 	rendererSettings: {
	// 		preserveAspectRatio: 'xMidYMid slice',
	// 	},
	// }

	return (
		<div>
			<Lottie animationData={props.animationData} loop play />
			{/* <Lottie  
	    		options={{defaultOptions.path}}
        		height={400}
        		width={400}
      		/> */}
		</div>
	)
}
