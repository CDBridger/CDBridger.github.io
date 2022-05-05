import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from '../../components/layout'
import { MDXRenderer } from "gatsby-plugin-mdx";


interface DataProps {
  contentfulBlogPost: {
    title: string;
    createdAt: Date;
    markDownBody: {
      childMdx: {
        body: string;
      }
    }
  }
}

const BlogPost: React.FC<PageProps<DataProps>> = ({data}) => {
  return (
    <Layout pageTitle={data.contentfulBlogPost.title}>
      <MDXRenderer>{data.contentfulBlogPost.markDownBody.childMdx.body}</MDXRenderer>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query ($slug: String) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      createdAt
      markDownBody {
        childMdx {
          body
        }
      }
    }
  }`