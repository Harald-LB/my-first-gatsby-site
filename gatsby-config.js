module.exports = {
  siteMetadata: {
    siteUrl: 'https://myfirstgatsbysitemain05045.gatsbyjs.io/',
    title: 'My First Gatsby Site',
    progressState: '4. Query for Data with GraphQL',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog`,
      },
    },
  ],
};
