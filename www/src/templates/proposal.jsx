import React from "react"
import { graphql } from 'gatsby'

import Header from "../components/Header"
import Footer from "../components/Footer"
import TableOfContents from "../components/TableOfContents";

import "./proposal.css"

export default class ProposalTemplate extends React.Component {
  render() {
    return (
      <div>
        <Header siteTitle="Sidewalk" />
        <div style={{
          padding: `6.5rem 2rem 5rem`,
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
            Content
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query Proposal {
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
