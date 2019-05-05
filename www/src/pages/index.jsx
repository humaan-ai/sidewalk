import React from "react"
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from "../components/seo"
import config from '../../site-config'

class Index extends React.Component {
  render() {
    return(
      <div>
        <Helmet title={config.siteTitle} />
        <SEO title="Home" titleTemplate="" keywords={[`sidewalk`, `image processing`, `bangkok`, `thailand`]} />
        <Header siteTitle="Sidewalk" />
        <div style={{
            padding: `6.5rem 2rem 5rem`,
          }}
        >
          <h1>Hello</h1>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Index
