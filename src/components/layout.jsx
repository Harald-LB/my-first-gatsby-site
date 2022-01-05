import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import {
  container,
  heading,
  navLinks,
  navLinkText,
  navLinkItem,
  siteTitle,
} from './layout.module.css';

function Layout({ pageTitle, children }) {
  const data = useStaticQuery(graphql`
      query  {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `);
  return (
    <div className={container}>
      <title>
        {pageTitle}
        {' '}
        |
        {' '}
        {data.site.siteMetadata.title}
      </title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.node,
};
Layout.defaultProps = { children: '' };

export default Layout;
