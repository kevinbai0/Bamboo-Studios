import PropTypes from "prop-types"
import React from "react";
import styled from "styled-components";

import * as theme from "../utils/theme";

const Nav = styled.nav`
  position: fixed;
  display: flex;
  top: 5vw;
  width: 90vw;
  left: 5vw;
  padding: 2vw 0;
  border-radius: 2vw;
  align-items: center;
  justify-content: space-evenly;

  background-color: ${theme.colors.tintColor};
  box-shadow: 0 3px 12px 0 rgba(0,0,0,0.32);
  @media only screen and (min-width: 900px) {
    left: initial;
    top: 0;
    right: 0;
    width: 0;
    padding: 0;
    border-radius: none;
    background-color: initial;
    flex-direction: column;
    align-items: flex-end;
    margin: 3vw 3vw 0 0;
    box-shadow: initial;
  }
`;

const CustomLink = styled(theme.StyledLink)`
  font-weight: 600;
  color: ${theme.colors.lightColor};
  @media only screen and (min-width: 900px) {
    color: ${theme.colors.darkColor};
    margin: 0 0 1vw;
  }
`;

const Header = ({ siteTitle }) => (
  <header>
    <Nav>
      <CustomLink to={"#"}>Work</CustomLink>
      <CustomLink to={"#"}>About</CustomLink>
      <CustomLink to={"#"}>Contact</CustomLink>
    </Nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
