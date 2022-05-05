import * as React from "react";
import { PageProps, graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";

interface DataProps {
  mdx: {
    body: string;
  };
}

// markup
const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  return (
    <Layout pageTitle="About">
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  {
    mdx(frontmatter: { slug: { eq: "/" } }) {
      body
    }
  }
`;
