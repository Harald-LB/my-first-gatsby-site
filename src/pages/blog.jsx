import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

// eslint-disable-next-line react/prop-types
function BlogPage({ data }) {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
          data.allFile.nodes.map((node) => (
            <li key={node.name}>
              {node.name}
            </li>
          ))
        }
      </ul>
    </Layout>
  );
}

export const query = graphql`
    query blogQuery {
        allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
            nodes {
                name
            }
        }
    }
`;

export default BlogPage;
