import React from "react";
import styled from "styled-components";
import * as theme from "../utils/theme";
import LogoTitle from "./custom/logo-title";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
const mobileWidth = 750;

const Container = styled.footer`
    background-color: ${theme.colors.tintColor};
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: auto auto;
    padding: 10vw;
    grid-gap: 3vw;

    @media only screen and (min-width: ${mobileWidth}px) {
        grid-template-rows: auto auto;
        padding: 5vw;
    }
`;

const LinksContainer = styled.div`
    grid-row: 1/3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media only screen and (min-width: ${mobileWidth}px) {
        grid-row: 1/2;
        flex-direction: row;
    }
`;

const SocialContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    justify-self: end;
`;

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: end;
    text-align: right;
    align-self: end;
    @media only screen and (min-width: ${mobileWidth}px) {
        grid-column: 2/3;
    }
`;

const CustomLink = styled(theme.StyledLink)`
    color: ${theme.colors.lightColor};
    font-weight: 700;
`;

const Icon = styled(Img)`
    width: 10vw;
    height: 10vw;
    margin: 0 0 0 2vw;

    @media only screen and (min-width: ${mobileWidth}px) {
        width: 5vw;
        height: 5vw;
    }
`;

const ContactLink = styled(theme.StyledExternalLink)`
    color: ${theme.colors.lightColor};
`;

export default function Footer() {
    const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      instagram: file(relativePath: { eq: "instagram-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
    return (
        <Container>
            <LinksContainer>
                <theme.ResponsiveText as={CustomLink} to={"/work"}>Work</theme.ResponsiveText>
                <theme.ResponsiveText as={CustomLink} to={"/about"}>About</theme.ResponsiveText>
                <theme.ResponsiveText as={CustomLink} to={"/blog"}>Blog</theme.ResponsiveText>
                <theme.ResponsiveText as={CustomLink} to={"/contact"}>Contact</theme.ResponsiveText>
            </LinksContainer>
            <SocialContainer>
                <Icon as={Img} fluid={data.facebook.childImageSharp.fluid} />
                <Icon as={Img} fluid={data.instagram.childImageSharp.fluid} />
            </SocialContainer>
            <ContactContainer>
                <theme.ResponsiveText as={ContactLink} href={"tel:+18076334358"}>+1 (807) 633-4358</theme.ResponsiveText>
                <theme.ResponsiveText as={ContactLink} href="mailto:kevinbai@bamboostudios.ca">kevinbai@bamboostudios.ca</theme.ResponsiveText>
            </ContactContainer>
            <LogoTitle isLight={true} custom={`
                grid-column: 1/3;
                @media only screen and (min-width: ${mobileWidth}px) {
                    grid-column: 1/2;
                    grid-row: 2/3;
                }
            `}/>
        </Container>
    );
}