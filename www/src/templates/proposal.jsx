import React from "react"
import { graphql } from 'gatsby'

import Header from "../components/Header"
import Footer from "../components/Footer"
import TableOfContents from "../components/TableOfContents";

import "./proposal.css"

export default class ProposalTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext
    const postNode = this.props.data.postBySlug
    const post = postNode.frontmatter
    if (!post.id) {
      post.id = slug
    }
    if (!post.id) {
      post.category_id = config.postDefaultCategoryID
    }
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
            <TableOfContents chapters={this.props.data.tableOfContents.chapters} />
          </div>
          <div style={{
            marginLeft: `390px`,
            background: `#fff`,
            padding: `4.25rem 3.75rem`,
          }}
          >
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query LessonBySlug($slug: String!) {
    postBySlug: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
    }
    tableOfContents: lessonsJson {
      chapters {
        title
        entries {
          entry {
            id
            childMarkdownRemark {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        chapters {
          title
          entries {
            entry {
              id
              childMarkdownRemark {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
          chapters {
            title
            entries {
              entry {
                id
                childMarkdownRemark {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
