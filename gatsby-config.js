module.exports = {
  siteMetadata: {
    siteUrl: 'https://myfirstgatsbysitemain05045.gatsbyjs.io/',
    title: 'My First Gatsby Site',
    progressState: 'Part 7: Add Dynamic Images from Data',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
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
