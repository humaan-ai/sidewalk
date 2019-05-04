import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#ffcf2b`,
      marginBottom: `1.45rem`,
      padding: `1.45rem 3.75rem`,
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `center`,
      width: `100%`,
    }}
  >
    <div
      style={{
        alignSelf: `flex-start`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#505050`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <nav className="nav">
      <ul>
        <li><Link to="/proposal/">Proposal</Link></li>
        <li><Link to="/">Docs</Link></li>
        <li><Link to="/">Contribute</Link></li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
