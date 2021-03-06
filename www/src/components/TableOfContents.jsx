import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const ChapterList = ({ chapter, source, sections, level = 0 }) => (
  <ChapterListItem>
    {chapter && (
      <Link to={source} activeStyle={{ color: "#ffcf2b" }}>{chapter}</Link>
    )}
    {sections && (
        <ul style={{marginBottom: `calc(1.45rem / 2)`}}>
          {sections.map((section, index) => (
              <li key={index}>
                <Link to={section.source} activeStyle={{ color: "#ffcf2b" }}>{section.title}</Link>
              </li>
          ))}
        </ul>
    )}
  </ChapterListItem>
)

const TableOfContents = ({ contents }) => (
  <TOCWrapper>
    {contents && contents.map((content, index) => <ChapterList { ...content } key={index} />)}
  </TOCWrapper>
)

export default TableOfContents

const TOCWrapper = styled.ul`
  margin: 0;
`

const EntryTitle = styled.h6`
  display: inline-block;
  font-weight: 200;
  color: black;
  margin: 0;
  line-height: 1.5;
  border-bottom: 1px solid transparent;
  text-decoration: none;
`

const ChapterListItem = styled.li`
  margin: 15px 0;
`
