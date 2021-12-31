import * as React from 'react';
import { Link } from 'gatsby';
import {
  container,
  heading,
  navLinks,
  navLinkText,
  navLinkItem,
} from './layout.module.css';

// eslint-disable-next-line react/prop-types
function Layout({ pageTitle, children }) {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li>
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

export default Layout;
