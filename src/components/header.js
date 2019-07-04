import PropTypes from "prop-types"
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { useStaticQuery, graphql, Link } from "gatsby"

import * as theme from "../utils/theme";

const switchNavWidth = 750;
const condenseValue = 100;

const Nav = styled.nav`
  position: fixed;
  display: grid;
  grid-template-rows: auto auto;
  grid-auto-columns: auto;
  grid-row-gap: 3vw;
  top: 0;
  width: 100vw;
  left: 0;
  padding: 7vw 0 2vw;
  align-items: center;
  justify-items: space-evenly;
  background-color: ${props => props.condensednav ? theme.colors.tintColor : "transparent"};
  ${props => props.condensednav && `
    transform: translateY(-50%);
  `};
  transition: all 0.2s ease;

  @media only screen and (min-width: ${switchNavWidth}px) {
    left: initial;
    top: 0;
    right: 0;
    width: 0;
    padding: 0;
    border-radius: none;
    background-color: initial;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 3vw 3vw 0 0;
    box-shadow: initial;
  }
`;

const CustomLink = styled(theme.StyledLink)`
  text-align: center;
  font-weight: 600;
  grid-row: 2/3;
  color: ${props => props.condensednav ? theme.colors.lightColor : theme.colors.darkColor};
  @media only screen and (min-width: ${switchNavWidth}px) {
    margin: 0 0 2vw;
  }
`;

const Logo = styled(Img)`
  cursor: pointer;
  transition: all 0.2s ease;
  width: 15vw;
  &:hover {
    opacity: 0.5;
  }
  @media only screen and (min-width: 600px) {
    width: 7vw;
    
  }
  @media only screen and (min-width: ${switchNavWidth}px) {
    align-self: flex-end;
    width: 5vw;
    margin: 0 0 2vw;
  }
`;

const LogoLink = styled(Link)`
  grid-row: 1/2;
  grid-column-start: 1;
  grid-column-end: span 4;
  justify-self: center;
  transition: all 0.2s ease;
  ${props => props.condensednav && `
    visibility: hidden;
    transform: scale(0);
  `}
`;

const Header = ({ siteTitle }) => {
  const [condensednav, setCondensednav] = useState(false);
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  // scroll listener for mobile only
  const scrollListener = (event) => {
    const offset = window.pageYOffset;
    if (window.innerWidth < switchNavWidth) {
      if (offset > condenseValue && !condensednav) setCondensednav(true);
      else if (offset <= condenseValue && condensednav) setCondensednav(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  });

  return (
    <header>
      <Nav condensednav={condensednav}>
        <LogoLink to={"/"} condensednav={condensednav}><Logo as={Img} fluid={data.placeholderImage.childImageSharp.fluid} /></LogoLink>
        <theme.ResponsiveText as={CustomLink} to={"/work"} condensednav={condensednav}>Work</theme.ResponsiveText>
        <theme.ResponsiveText as={CustomLink} to={"/about"} condensednav={condensednav}>About</theme.ResponsiveText>   
        <theme.ResponsiveText as={CustomLink} to={"/blog"} condensednav={condensednav}>Blog</theme.ResponsiveText>         
        <theme.ResponsiveText as={CustomLink} to={"/contact"} condensednav={condensednav}>Contact</theme.ResponsiveText>
      </Nav>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
