import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" titleTemplate="" keywords={[`gatsby`, `application`, `react`]} />
    <p style={{lineHeight: 1.5}}>A sidewalk (American English) or pavement (British English), also known as a footpath or footway, is a path along the side of a road. A sidewalk may accommodate moderate changes in grade (height) and is normally separated from the vehicular section by a curb. There may also be a median strip or road verge (a strip of vegetation, grass or bushes or trees or a combination of these) either between the sidewalk and the roadway or between the sidewalk and the boundary.</p>
  </Layout>
)

export default IndexPage
