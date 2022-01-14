import React from 'react'
import { ReactNode } from 'react'
import { createGlobalStyle } from 'styled-components'

import { SeoMeta } from '@/components/Seo/SeoMeta'
import { Header } from '@/components/Header/Header'

import Footer from '@/components/Footers/BaseFooter'

export const GlobalStyle = createGlobalStyle`
    // this is the shared style
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

h1 {
    color: yellow !important; // the important is just to show that the style works!
}

  // anything else you would like to include
.bg-gradient-info {
	background: linear-gradient(35deg, #11cdef 0, #1171ef 100%) !important;
}
`

// interfacce
type ILayoutProps = {
	children: ReactNode
}

const Layout = (props: ILayoutProps) => {
	return (
		<>
			<GlobalStyle />
			<SeoMeta />
			<Header />
			{props.children}
			<Footer />
		</>
	)
}

export default Layout
