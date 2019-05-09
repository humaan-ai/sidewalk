import React from "react"
import { graphql } from 'gatsby'

import Header from "../components/Header"
import Footer from "../components/Footer"
import TableOfContents from "../components/TableOfContents";

import "./proposal.css"

export default class ProposalTemplate extends React.Component {
  render() {
    const contentNode = this.props.data.contentBySlug
    return (
      <div style={{
        display: `flex`,
        flexDirection: `column`,
        height: `100vh`,
      }}>
        <Header siteTitle="Sidewalk" />
        <div style={{
          padding: `6.5rem 2rem 5rem`,
          flex: `1 0 auto`
        }}
        >
          <div style={{
            width: `350px`,
            position: 'fixed',
            zIndex: 1,
            background: `#fff`,
            overflowX: `hidden`,
            padding: 20,
          }}
          >
            <TableOfContents contents={this.props.data.tableOfContents.contents} />
          </div>
          <div style={{
            marginLeft: `390px`,
            background: `#fff`,
            padding: `4.25rem 3.75rem`,
          }}
          >
            <div dangerouslySetInnerHTML={{__html: contentNode.html}} />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query Proposal($slug: String!) {
    contentBySlug: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
    tableOfContents: proposalJson {
      id
      contents {
        chapter
        source
        sections {
          title
          source
        }
      }
    }
  }
`
