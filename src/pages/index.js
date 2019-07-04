import React from "react";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo";
import * as theme from "../utils/theme";

import LabelButton from "../components/custom/LabelButton";

import { LandingContainer, TitleTagline, Subline, SecondaryContainer, SecondLandingHeader, ButtonsContainer, ContactContainer } from "../styled-components/landing-components";
import DefaultButton from "../components/default-button";

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
      <ButtonsContainer>
        <LabelButton text="Websites" margin={"2vw 2vw 0 0"}/>
        <LabelButton text="Mobile Apps" margin={"2vw 2vw 0 0"}/>
        <LabelButton text="Software Development" margin={"2vw 2vw 0 0"}/>
      </ButtonsContainer>
      <DefaultButton text="See our work" backgroundColor={theme.colors.lightColor} color={theme.colors.darkColor} margin={"2vw 0 0"}/>
    </SecondaryContainer>
    <ContactContainer>
      
    </ContactContainer>
  </Layout>
)

export default IndexPage
