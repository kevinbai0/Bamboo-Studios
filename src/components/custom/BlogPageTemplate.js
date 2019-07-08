import React from "react";
import styled from "styled-components";
import * as theme from "../../utils/theme";
import Layout from "../layout";
import SEO from "../seo";

import { MDXProvider } from "@mdx-js/react";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import parseDate from "../../utils/dateParser";



const Page = styled.div`
    padding: 40vw 5vw 10vw;
    margin: 0 auto;

    @media only screen and (min-width: 600px) {
        padding: 30vw 5vw 10vw;
    }
    @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
        padding: 15vw 0 5vw;
        width: 700px;
    }
    @media only screen and (min-width: 1200px) {
        padding: 12vw 0 5vw;
    }
    color: ${theme.colors.darkColor};
`;

const Header = styled.div`
    margin: 0 0 30px 0;
`;

const DateHeader = styled.span`
    color: ${theme.colors.darkTintColor};
    font-size: 18px;
    font-weight: 900;
    @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
        font-size: 20px;
    }
`;

const LabelRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0 0;
`;

const HeaderLabel = styled.span`
    font-size: 16px;
`;

const Paragraph = styled(theme.FluidText)`
    line-height: 1.3;
`;

const Ending = styled.div`
    display: flex;
    margin: 30px 0;
    border-top: 1px solid ${theme.colors.darkTintColor};
    border-bottom: 1px solid ${theme.colors.darkTintColor};
    padding: 20px 0;
    align-items: center;
`;
const AuthorAttributions = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 0 2vw;
`;
const EndingAuthorLabel = styled.span`
    font-size: 18px;
    @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
        font-size: 24px;
    }
`;

const AuthorImage = styled(Img)`
    background-color: white;
    border-radius: 20vw;
    width: 75px;
    height: 75px;
    @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
        width: 150px;
        height: 150px;
    }
`;

const CoverImage = styled(Img)`
    margin: 0 -5vw 30px;

    @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
        margin: 0 0 30px;
        width: 100%;
    }

`;

export default function BlogPageTemplate({ data: {mdx} }) {
    const date = parseDate(mdx.frontmatter.date);
    return (
        <Layout>
            <SEO title={mdx.frontmatter.title} description={mdx.frontmatter.description} meta={[
                {
                    name: "author",
                    content: mdx.frontmatter.author
                }
            ]}/>
            <Page>
                <Header>
                    <theme.FluidHeader>{mdx.frontmatter.title}</theme.FluidHeader>
                    <DateHeader>{date}</DateHeader>
                    <LabelRow>
                        <HeaderLabel>By {mdx.frontmatter.author}</HeaderLabel>
                        <HeaderLabel>{Math.round(mdx.body.split(" ").length / 250)} min read</HeaderLabel>
                    </LabelRow>
                </Header>
                {
                    mdx.frontmatter.mainImage && 
                        <CoverImage fluid={mdx.frontmatter.mainImage.childImageSharp.fluid} />
                }
                <MDXProvider
                    components={{
                        // Or define component inline
                        p: Paragraph
                    }}
                >
                    <MDXRenderer>
                        {mdx.body}
                    </MDXRenderer>
                </MDXProvider>

                <Ending>
                    <AuthorImage fluid={mdx.frontmatter.authorImage.childImageSharp.fluid} />
                    <AuthorAttributions>
                        <EndingAuthorLabel>Written by {mdx.frontmatter.author}</EndingAuthorLabel>
                        <DateHeader>{date}</DateHeader>
                    </AuthorAttributions>
                </Ending>
            </Page>
        </Layout>
    );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
        id
        frontmatter {
            title
            author
            date
            description
            authorImage {
                childImageSharp {
                    fluid(quality: 100, maxWidth: 500, maxHeight: 500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            mainImage {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
        }
        body
    }
  }
`