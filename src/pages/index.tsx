/** A JSDoc Comment to explain what the function does.
 * Home:
 * @return {JSX.Element}
 */
import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { InferGetStaticPropsType } from 'next'
import dynamic from 'next/dynamic'
import Layout from '@/components/Layout'

import Greetings from '@/containers/Greetings'
import Skills from '@/containers/Skills'
import Proficiency from '@/containers/Proficiency'
import Education from '@/containers/Education'
import Experience from '@/containers/Experience'
import Feedbacks from '@/containers/Feedbacks'
import Projects from '@/containers/Projects'
import ContactMe from '@/containers/ContactMe'
// import GithubProfileCard from '@/components/GithubProfileCard'
const GithubProfileCard = dynamic(
	() => import('@/components/GithubProfileCard')
)
import { openSource } from '@/../_CmsData/MyPortfolio'

// export default function Home() {
export default function Home({
	githubProfileData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<Layout>
				<Head>
					<title>🎯 Portfolio Boilerplate</title>
				</Head>
				<Greetings />
				<ContactMe />
				<Skills />
				<Proficiency />
				<Education />
				<Experience />
				<Feedbacks />
				<Projects />
				{/* TODO: how to pass json object to component?
				<GithubProfileCard prof={githubProfileData} /> */}
				<GithubProfileCard
					avatar_url={githubProfileData.avatar_url}
					location={githubProfileData.location}
					bio={githubProfileData.bio}
				/>
			</Layout>
		</>
	)
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
}

export async function getStaticProps() {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then(res => res.json())

	return {
		props: { githubProfileData },
	}
}
