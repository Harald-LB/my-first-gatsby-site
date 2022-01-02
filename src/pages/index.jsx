// Step 1: Import React
import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

// Step 2: Define your component
function IndexPage() {
  return (
    <Layout pageTitle="Home Page">
      <p>I&apos;m making this by following the Gatsby Tutorial.</p>
      <p>We&apos;ll start now with Part 3: Add Features with Plugins</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  );
}
export default IndexPage;
