import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TemplatePage, { TemplateHeader } from "../components/custom/TemplatePage";
import * as theme from "../utils/theme";
import styled from "styled-components";
import BlogCard from "../components/custom/BlogCard";

const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: 70vw;
  grid-gap: 5vw;
  margin: 5vw 0 0;
  @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
    grid-template-columns: 35vw 35vw;
    grid-auto-rows: 35vw;
    grid-gap: 2vw;
    margin: 0;
  }
  @media only screen and (min-width: 900px) {
    grid-template-columns: 23vw 23vw 23vw;
    grid-auto-columns: 23vw;
    grid-auto-rows: 23vw;
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: 300px 300px 300px;
    grid-auto-columns: 300px;
    grid-auto-rows: 300px;
    grid-gap: 20px;
  }
  @media only screen and (min-width: 1600px) {
    grid-template-columns: 400px 400px 400px;
    grid-auto-columns: 400px;
    grid-auto-rows: 400px;
  }
`;

const BlogPage = ({data}) => {
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <SEO title="Blog" />
      <TemplatePage title="Blog">
        <TemplateHeader as={theme.ResponsiveHeader}>Stories</TemplateHeader>
        <BlogContainer>
          {
            posts.map(({node: post}) => 
              <BlogCard
                title={post.frontmatter.title}
                date={post.frontmatter.date}
                path={post.frontmatter.path}
                image={post.frontmatter.mainImage.childImageSharp.fluid}
                link={post.frontmatter.path} author={post.frontmatter.author}
              />
            )
          }
        </BlogContainer>
      </TemplatePage>
    </Layout>
  );
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
            path
            author
            mainImage {
              childImageSharp {
                fluid(quality: 100, maxWidth: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default BlogPage