module.exports = {
	siteMetadata: {
		title: "marcoforster.ch"
	},
	plugins: [
		"gatsby-plugin-gatsby-cloud",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/assets/images/icon.png"
			}
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "assets",
				path: "./src/assets/"
			},
			__key: "assets"
		},
		"gatsby-plugin-eslint",
		"gatsby-plugin-sass"
	]
};
