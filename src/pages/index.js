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
`;

const Subline = styled.h3`
  font-weight: 400;
  color: ${theme.colors.tintColor};
  line-height: 1.5;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingContainer>
      <Logo />
      <Tagline>We build experiences that last.</Tagline>
      <Subline>Take your business to the next level and gain an advantage in the digital world.</Subline>
    </LandingContainer>
  </Layout>
)

export default IndexPage
