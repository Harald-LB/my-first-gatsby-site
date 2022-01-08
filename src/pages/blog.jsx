import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';

// eslint-disable-next-line react/prop-types
function BlogPage({ data }) {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
          data.allMdx.nodes.map((node) => (
            <li key={node.id}>
              <h2>{node.frontmatter.title}</h2>
              <p>
                Posted:
                {node.frontmatter.date}
                <MDXRenderer>
                  {node.body}
                </MDXRenderer>
              </p>
            </li>
          ))
        }
      </ul>
    </Layout>
  );
}

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                    title
                    date(formatString: "MMMM DD, YYYY")
                }
                id
                body
            }
        }
    }

`;

export default BlogPage;
