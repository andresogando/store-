require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: 'My Shop',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'ZDU4NGRhZjgtZjFjMi00NTFiLWEyMGYtNGZhNGU3OWNmYjc4NjM3NDAxMTM1NzUxNzc1Mjg2',
        autopop: true
      }
    },
  ],
}
