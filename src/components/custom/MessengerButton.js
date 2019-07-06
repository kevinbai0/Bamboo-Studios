import React from "react";
import styled from "styled-components";
import * as theme from "../../utils/theme";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Container = styled(theme.StyledLink)`
    background-color: #0084ff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10vw;
    padding: 0.75vw 0 0.75vw 4vw;
    @media only screen and (min-width: 600px) {
        padding: 0.5vw 0 0.5vw 1.5vw;
    }
`;

const TextComponent = styled(theme.ResponsiveText)`
    color: white;
`;

const Icon = styled(Img)`
    width: 6vw;
    margin: 0 1vw 0 4vw;

    @media only screen and (min-width: 600px) {
        margin: 0 0.5vw 0 2vw;
        width: 3vw;
    }
`;

export default function MessengerButton() {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "messenger-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

    return (
        <Container as={"a"} href="https://m.me/bamboostudiosdesign" target="_blank">
            <TextComponent>Messenger</TextComponent>
            <Icon as={Img} fluid={data.placeholderImage.childImageSharp.fluid} />
        </Container>
    )
}