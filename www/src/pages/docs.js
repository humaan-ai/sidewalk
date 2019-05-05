import React from "react"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

const DocsPage = () => (
  <Layout>
    <SEO title="Documents" titleTemplate="" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{
        padding: `4rem 2rem`,
        textAlign: `center`,
      }}
    >
      <h1>Documents</h1>
    </div>
  </Layout>
)

export default DocsPage
