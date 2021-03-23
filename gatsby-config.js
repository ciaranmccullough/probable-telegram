module.exports = {
  pathPrefix: '/probable-telegram',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-lingui',
        short_name: 'starter',
        start_url: '/probable-telegram/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locale`,
        name: `locale`,
      },
    },
    {
      resolve: '@wapps/gatsby-plugin-i18next',
      options: {
        availableLngs: ['de', 'en', 'es', 'fr', 'it'],
        fallbackLng: 'en',
        siteUrl: 'https://www.example.com/',
        i18nextOptions: {
          debug: false,
        },
      },
    },
    'gatsby-plugin-offline',
  ],
};
