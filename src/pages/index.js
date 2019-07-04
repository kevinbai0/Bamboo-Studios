import React from "react";

import Layout from "../components/layout"
import SEO from "../components/seo"
import * as theme from "../utils/theme";

import LabelButton from "../components/custom/LabelButton";

import { LandingContainer, TitleTagline, Subline, SecondaryContainer, SecondLandingHeader, ButtonsContainer, ContactContainer } from "../styled-components/landing-components";
import DefaultButton from "../components/default-button";
import LogoTitle from "../components/logo-title";

const scaledMargins = `
  margin: 4vw 4vw 0 0;
  @media only screen and (min-width: 600px) {
    margin: 2vw 2vw 0 0;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingContainer>
      <LogoTitle />
      <TitleTagline>We build experiences that last.</TitleTagline>
      <Subline>Take your business to the next level and gain an advantage in the digital world.</Subline>
    </LandingContainer>
    <SecondaryContainer>
      <SecondLandingHeader>We design & develop custom solutions for you.</SecondLandingHeader>
      <ButtonsContainer>
        <LabelButton text="Websites" custom={scaledMargins}/>
        <LabelButton text="Mobile Apps" custom={scaledMargins}/>
        <LabelButton text="Software Development" custom={scaledMargins}/>
      </ButtonsContainer>
      <DefaultButton 
        text="See our work"
        backgroundColor={theme.colors.lightColor} 
        color={theme.colors.darkColor}
        custom={`
          margin: 4vw 0 0;
          @media only screen and (min-width: 600px) {
            margin: 2vw 0 0;
          }
        `}
      />
    </SecondaryContainer>
    <ContactContainer>
      
    </ContactContainer>
  </Layout>
)

export default IndexPage
