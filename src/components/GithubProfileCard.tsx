import React from 'react'

type Props = {
	avatar_url: string
	location: string
	bio: string
}

const GithubProfileCard = (prof: Props) => {
	return (
		<div className='section-lg bg-gradient-info shadow-lg border-0 card'>
			<div className='container'>
				<div className='p-2'>
					<div className='row'>
						<div className='order-lg-2 col-lg-4'>
							<img
								src={prof.avatar_url}
								style={{ width: '200px' }}
								alt=''
								className='rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4'
							/>
						</div>
						<div className='order-lg-1 col-lg-8'>
							<h2 className='text-white'>Reach Out to me!</h2>
							<p className='lead text-white mt-3'>
								DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR
								ALL
							</p>
							<p className='text-white mt-3'>{prof.bio}</p>
							<div className='my-3 icon-shape bg-gradient-white shadow rounded text-info'>
								<i className='ni ni-pin-3 text-info mr-2' />
								{prof.location}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GithubProfileCard
