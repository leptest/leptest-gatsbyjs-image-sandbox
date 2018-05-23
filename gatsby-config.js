module.exports = {
	siteMetadata: {
		title: 'Gatsby + Netlify CMS Starter',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				precision: 6,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			},
		},
		// https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-filesystem
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/img`,
				name: 'images',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [],
			},
		},
	],
};
