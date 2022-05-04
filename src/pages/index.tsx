import * as React from "react"
import { PageProps, graphql } from "gatsby"
import '../styles/main.scss'
import { MDXRenderer } from "gatsby-plugin-mdx"



interface DataProps {
  mdx: {
    body: string
  }
}

// markup
const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  return (
    <main>
      <title>Home Page</title>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </main>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    mdx(frontmatter: {slug: {eq: "/"}}) {
      body
    }
  }
`
