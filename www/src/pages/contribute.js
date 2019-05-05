import React from "react"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

const ContributePage = () => (
  <Layout>
    <SEO title="Contribute" titleTemplate="" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{
        padding: `4rem 2rem`,
        textAlign: `center`,
      }}
    >
      <h1>Contribute</h1>
    </div>
  </Layout>
)

export default ContributePage
