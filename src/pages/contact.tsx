import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "../components/layout";

interface DataProps {
    mdx: {
      body: string;
    };
  }
  

const HistoryPage: React.FC<PageProps<DataProps>> = ({ data }) => (
    <Layout pageTitle="Contact">
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
);
  
  export default HistoryPage;

  export const pageQuery = graphql`
  {
    mdx(frontmatter: { slug: { eq: "/contact" } }) {
      body
    }
  }
`;
