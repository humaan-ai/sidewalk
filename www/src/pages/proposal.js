import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Project proposal" />
    <h3 style={{textAlign: `center`}}>Project Proposal</h3>
    <h1 style={{textAlign: `center`}}>Bangkok's sidewalks analysis</h1>
    
    <div style={{
        margin: `0 auto`,
        maxWidth: 960,
    }}>
        <h3>1. Project Summary</h3>
        <p>In today’s scientific environment, there is a growing focus on data storage and processing. Some of the largest problems scientists face are related to the data deluge, and the inability to conceptalize problem and solutions from large tracts of data. The result is many attempts by scientific pro- fessionals to design software, leading to many bad software designs. Vast amounts of expensively collected data never get processed, because the software designs take so much maintenance. Data is often duplicated, often in different locations, lost, or never makes it from collection to analysis. The overall lack of system designs to handle the data further hinders analysis.</p>
        <p>This proposal is for a project that helps solve these design problems for many scientists. The project is a data harvester and organizer tool. It is a local web interface that allows scientists to collect, query, organize, and share data with other researchers. Many of these scientists work with similar data sets, ask different questions, and need immediate search tools. The proposed tool would first allow users to visualize and filter data, and secondly prepare and ship the data off for analysis. It also helps users visualize data graphically, to help the conceptualize, organize, and refine data, before transporting and processing it. This project proposes using PTAG and othe ecological data sets from the Columbia Basin to test design, but should be exdendable to many different users with very different data sets.</p>
        <h4>1.1 Background</h4>
        <p>In the Columbia Basin today, millions of federal dollars are spent on PTAG and othe systems to collect environmental data. This data includes fish location, ecological community composition, and abiotic data. Yet, the project results from most research are far from concrete. Despite the lack of understandable results, important decisions that affect the local environment and economy have to be made. Decisions like whether or not to conduct major habitat restoration projects.</p>
        <h4>1.2 Problem Statement</h4>
        <p>In the Columbia Basin today, millions of federal dollars are spent on PTAG and othe systems to collect environmental data. This data includes fish location, ecological community composition, and abiotic data. Yet, the project results from most research are far from concrete. Despite the lack of understandable results, important decisions that affect the local environment and economy have to be made. Decisions like whether or not to conduct major habitat restoration projects.</p>
    </div>
  </Layout>
)

export default SecondPage
