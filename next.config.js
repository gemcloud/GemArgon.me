/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
// const withImages = require('next-images')

const {
	EMAIL_JS_SERVICE,
	EMAIL_JS_TEMPLATE,
	EMAIL_JS_USER,
	CAPTCHA_SITE_KEY,
	GTAG,
	ON_GITHUB_PAGES,
} = process.env

const basePath = ON_GITHUB_PAGES ? '/yourWebSiteName' : ''
const assetPrefix = ON_GITHUB_PAGES ? '/yourWebSiteName/' : ''

const env = {
	CANONICAL_URL: 'https://yourWebSiteName.ca',
	EMAIL_JS_SERVICE,
	EMAIL_JS_TEMPLATE,
	EMAIL_JS_USER,
	CAPTCHA_SITE_KEY,
	GTAG,
}

// module.exports = withImages({
// 	reactStrictMode: true,
// 	env,
// 	basePath,
// 	assetPrefix,
// 	images: {
// 		disableStaticImages: true,
// 	},
// })

module.exports = withPlugins([
	[
		optimizedImages,
		{
			mozjpeg: {
				quality: 80,
			},
			pngquant: {
				speed: 3,
				strip: true,
				verbose: true,
			},
		},
	],

	{
		reactStrictMode: true,
		env,
		basePath,
		assetPrefix,
		images: {
			disableStaticImages: true,
		},
	},
])
