import { graphql, Link, PageProps } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import { format } from 'date-fns'
import { LinkFadeUp } from "../../components/link-fade-up"

interface DataProps {
    allContentfulBlogPost: {
        edges: {
            node: {
              slug: string;
              title: string
              createdAt: string
              contentful_id: string
              id:string
            }
         }[]
      }
}

const BlogsIndexPage: React.FC<PageProps<DataProps>> = ({data}) => {


    return(
        <Layout pageTitle="Blogs">
            <div>
                {data.allContentfulBlogPost.edges.map(({ node }) => {
                    return(
                        <article key={node.id}>
                            <h3>
                                <LinkFadeUp url={node.slug}>
                                    {node.title}
                                </LinkFadeUp>
                            </h3>
                            <sub>{`Posted: ${format(new Date(node.createdAt), 'E, dd MMM y')}`}</sub>
                        </article>
                    )
                })}
            </div>
        </Layout>
    )

}

export default BlogsIndexPage

export const PageQuery = graphql`
{
    allContentfulBlogPost {
        edges{
            node {
                slug
                title
                createdAt
                contentful_id
                id
            }
        }
    }
}
`