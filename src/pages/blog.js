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
  grid-auto-rows: 75vw;
  grid-gap: 5vw;
  margin: 5vw 0 0;
  @media only screen and (min-width: 450px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 40vw;
    grid-gap: 2vw;
    margin: 0;
  }
  @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
    margin: 0 5vw 0 0;
    grid-auto-rows: 35vw;
  }
  @media only screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 25vw;
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: 300px 300px 300px;
    grid-auto-columns: 300px;
    grid-auto-rows: auto;
    grid-gap: 20px;
  }
  @media only screen and (min-width: 1600px) {
    grid-template-columns: 400px 400px 400px;
    grid-auto-columns: 400px;
    grid-auto-rows: auto;
  }
`;

const BlogPage = ({data}) => {
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <SEO title="Blog" description="Our blog, written by team members of Bamboo Studios, where we bring you content about design & development." />
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
