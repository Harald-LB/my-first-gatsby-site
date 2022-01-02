// Step 1: Import React
import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

// Step 2: Define your component
function AboutPage() {
  return (
    <main>
      <Layout pageTitle="About Me">
        <p>Hi there! I&apos;m the proud creator of this site, which I built with Gatsby.</p>
        <StaticImage
          alt="pebble stones"
          src="../images/Render.png"
        />
      </Layout>
    </main>
  );
}
// Step 3: Export your component
export default AboutPage;
