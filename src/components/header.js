import PropTypes from "prop-types"
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { useStaticQuery, graphql, Link } from "gatsby"

import * as theme from "../utils/theme";

const condenseValue = 5;

const Nav = styled.nav`
  z-index: 10;
  position: fixed;
  display: grid;
  grid-template-rows: auto auto;
  grid-auto-columns: auto;
  grid-row-gap: 5vw;
  top: 0;
  width: 100vw;
  left: 0;
  padding: 7vw 5vw 2vw;
  align-items: center;
  justify-items: space-evenly;
  box-shadow: 0 2px 18px 0 rgba(0,0,0,0);
  background-color: ${props => props.condensednav ? theme.colors.darkTintColor : "transparent"};
  ${props => props.condensednav && `
    transform: translateY(-50%);
    box-shadow: 0 2px 18px 0 rgba(0,0,0,0.4);
  `};
  transition: all 0.2s ease;

  @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
    border-radius: none;
    display: flex;
    align-items: center;
    padding: 5vw 15vw 0;
    ${props => props.condensednav && `
      transform: translateY(-40%);
  `};
  }
  @media only screen and (min-width: 1200px) {
    padding: 3vw 10vw 0;
  }
`;

const CustomLink = styled(theme.StyledLink)`
  text-align: center;
  font-weight: 600;
  grid-row: 2/3;
  color: ${props => props.condensednav ? theme.colors.lightColor : theme.colors.darkColor};
  ${props => props.noMobile && `display: none;`}


  @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
    margin: 0 2vw 0 0;
    ${props => props.mobileOnly && `display: none;`}
    ${props => props.noMobile && `display: block;`}

  }
`;

const Logo = styled(Img)`
  cursor: pointer;
  transition: all 0.2s ease;
  width: 12vw;
  &:hover {
    opacity: 0.5;
  }
  @media only screen and (min-width: 600px) {
    width: 7vw;
    
  }
  @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
    width: 5vw;
    margin: 0 4vw 0 0;
  }
  @media only screen and (min-width: 1200px) {
    width: 4vw;
  }
`;

const LogoLink = styled(Link)`
  grid-row: 1/2;
  grid-column-start: 1;
  grid-column-end: span 4;
  justify-self: center;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  ${props => props.condensednav && `
    visibility: hidden;
    transform: scale(0);
  `}
  @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
    visibility: visible;
    transform: scale(1);
  }
`;

const Header = ({ siteTitle }) => {
  const [ condensednav, setCondensednav ] = useState(false);

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
    if (offset > condenseValue && !condensednav) setCondensednav(true);
    else if (offset <= condenseValue && condensednav) setCondensednav(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  });

  return (
    <header>
      <Nav condensednav={condensednav}>
        <LogoLink as={theme.StyledLink} to={"/"} condensednav={condensednav}>
          <Logo as={Img} fluid={data.placeholderImage.childImageSharp.fluid} />
          <theme.ResponsiveText as={CustomLink} to="/" condensednav={condensednav} mobileOnly customStyle={`margin: 0 0 0 3vw`}>Home</theme.ResponsiveText>
        </LogoLink>
        <theme.ResponsiveText as={CustomLink} to="/" condensednav={condensednav} noMobile>Home</theme.ResponsiveText>
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
