/** A JSDoc Comment to explain what the function does.
 * Home:
 * @return {JSX.Element}
 */
import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'

import Greetings from '@/containers/Greetings'
import Skills from '@/containers/Skills'
import Proficiency from '@/containers/Proficiency'
import Education from '@/containers/Education'
import Experience from '@/containers/Experience'
import Feedbacks from '@/containers/Feedbacks'
import Projects from '@/containers/Projects'

// import { openSource } from '@/../_CmsData/MyPortfolio'

export default function Home() {
	return (
		<>
			<Layout>
				<Head>
					<title>🎯 Portfolio Boilerplate</title>
				</Head>
				<Greetings />
				<Skills />
				<Proficiency />
				<Education />
				<Experience />
				<Feedbacks />
				<Projects />
				{/*
		<ContactUs sent email />
        <GithubProfileCard prof={githubProfileData} /> */}
			</Layout>
		</>
	)
}

// Home.prototype = {
// 	githubProfileData: PropTypes.object.isRequired,
// }

// export async function getStaticProps() {
// 	const githubProfileData = await fetch(
// 		`https://api.github.com/users/${openSource.githubUserName}`
// 	).then(res => res.json())

// 	return {
// 		props: { githubProfileData },
// 	}
// }
