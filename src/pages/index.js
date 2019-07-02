import React from "react";
import styled from "styled-components";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo";
import { Tagline } from "../utils/theme";
import * as theme from "../utils/theme";

const LandingContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 15vw 15vw;
  @media only screen and (min-width: 1200px) {
    padding: 0 10vw 10vw;
  }
`;
const TitleTagline = styled(Tagline)`
  margin: 3vw 0 0;
  font-size: 8vw;
  @media only screen and (min-width: 600px) {
    font-size: 6vw;
  }
  @media only screen and (min-width: 900px) {
    font-size: calc(12px + 3vw);
  }
`;
const Subline = styled.h3`
  font-weight: 400;
  color: ${theme.colors.tintColor};
  line-height: 1.5;
  font-size: 5vw;
  @media only screen and (min-width: 450px) {
    font-size: 4vw;
  }
  @media only screen and (min-width: 900px) {
    width: 60vw;
    font-size: calc(12px + 2vw);
  }
`;

const SecondaryContainer = styled.div`
  background-color: ${theme.colors.darkColor};
`;

const SecondLandingHeader = styled(theme.Header)`
  color: ${theme.colors.lightColor};
  line-height: 1.5;
  padding: 15vw;
  font-size: 5vw;
  @media only screen and (min-width: 450px) {
    font-size: 4vw;
  }
  @media only screen and (min-width: 900px) {
    font-size: calc(12px + 2vw);
  }
  @media only screen and (min-width: 1200px) {
    padding: 10vw;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingContainer>
      <Logo />
      <TitleTagline>We build experiences that last.</TitleTagline>
      <Subline>Take your business to the next level and gain an advantage in the digital world.</Subline>
    </LandingContainer>
    <SecondaryContainer>
      <SecondLandingHeader>We design & develop custom solutions for you.</SecondLandingHeader>
    </SecondaryContainer>
  </Layout>
)

export default IndexPage
