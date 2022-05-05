import { graphql, Link, PageProps } from "gatsby"
import React from "react"
import Layout from "../../components/layout"

interface DataProps {
    allContentfulBlogPost: {
        nodes: {
          slug: string;
          title: string
          createdAt: string
          contentful_id: string
          id:string
        }[]
      }
}

const BlogsIndexPage: React.FC<PageProps<DataProps>> = ({data}) => {


    return(
        <Layout pageTitle="Blogs">
            <div>
                {data.allContentfulBlogPost.nodes.map((post) => {
                    return(
                        <article>
                            <h3>
                                <Link to={post.slug}>
                                    {post.title}
                                </Link>
                            </h3>
                            <sub>{`Posted: ${post.createdAt}`}</sub>
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
        nodes {
            slug
            title
            createdAt
            contentful_id
            id
        }
    }
}
`