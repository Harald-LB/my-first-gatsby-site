module.exports = {
  siteMetadata: {
    siteUrl: 'https://myfirstgatsbysitemain05045.gatsbyjs.io/',
    title: 'My First Gatsby Site',
    progressState: '5. Transform Data to Use MDX',
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
