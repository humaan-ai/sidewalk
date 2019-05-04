/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            padding: `3.75rem 3.75rem`,
            paddingTop: 0,
          }}
        >
          <main style={{marginTop: 80, marginBottom: 80}}>{children}</main>
          <footer style={{borderTop: '1px solid #e1e1e1', padding: `15px 0`}}>
            © {new Date().getFullYear()}, Sidewalk | 
            {` `}
            <a href="https://humaan.ai">Humaan.ai</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
