module.exports = {
  siteMetadata: {
    siteUrl: 'https://myfirstgatsbysitemain05045.gatsbyjs.io/',
    title: 'My First Gatsby Site',
    progressState: '4. Query for Data with GraphQL',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-lint-queries',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog`,
      },
    },
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {},
          },
        ],
      },
    },
  ],
};
