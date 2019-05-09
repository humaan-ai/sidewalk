import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      position: `fixed`,
      background: `#ffcf2b`,
      padding: `1rem 2rem`,
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `center`,
      width: `100%`,
      top: 0,
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
        <li><Link to="/proposal/project-summary">Proposal</Link></li>
        <li><Link to="/docs">Docs</Link></li>
        <li><Link to="/contribute">Contribute</Link></li>
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
