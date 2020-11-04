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
      options: { apiToken:'144f43c7dc53f42cbf22569c384cbb' },
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
