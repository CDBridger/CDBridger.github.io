import * as React from 'react'
import { graphql, Link, PageProps } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from '../../components/layout';
import { LinkFadeRight } from '../../components/link-fade-right';
import { LinkFadeLeft } from '../../components/link-fade-left';


interface DataProps {
  contentfulBlogPost: {
    title: string;
    createdAt: Date;
    id: string;
    markDownBody: {
      childMdx: {
        body: string;
      }
    }
  }
  allContentfulBlogPost: {
    edges: {
        node: {
          id:string
        },
        next?: {
            slug: string;
            title: string;
        },
        previous?: {
            slug: string;
            title: string;
        }
     }[]
  }
}

const BlogPost: React.FC<PageProps<DataProps>> = ({data}: PageProps<DataProps>) => {

  const locationData = data.allContentfulBlogPost.edges.find(({node}) => node.id === data.contentfulBlogPost.id)!

  return (
    <Layout pageTitle={data.contentfulBlogPost.title} article={true}>
      <MDXRenderer>{data.contentfulBlogPost.markDownBody.childMdx.body}</MDXRenderer>
      <div style={{flexDirection:'row', justifyContent:'space-between', display:'flex'}}>
        <div>
          {locationData.next && <h4>Previous: <LinkFadeRight url={`../${locationData.next?.slug}`}>{locationData.next.title}</LinkFadeRight></h4>}
        </div>
        <div>
          {locationData.previous && <h4>Next: <LinkFadeLeft url={`../${locationData.previous?.slug}`}>{locationData.previous.title}</LinkFadeLeft></h4>}
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query ($slug: String) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      createdAt
      id
      markDownBody {
        childMdx {
          body
        }
      }
    }
    allContentfulBlogPost {
      edges{
          node {
              id
          }
          next {
              slug
              title
          }
          previous {
              slug
              title
          }
      }
  }
  }`