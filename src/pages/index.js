/*global FB*/

import React, { useEffect } from "react";

import Layout from "../components/layout"
import SEO from "../components/seo"
import * as theme from "../utils/theme";

import LabelButton from "../components/custom/LabelButton";

import { LandingContainer, TitleTagline, Subline, SecondaryContainer, SecondLandingHeader, ButtonsContainer, ContactContainer, ContactHeader, MessageLabel } from "../styled-components/landing-components";
import DefaultButton from "../components/default-button";
import LogoTitle from "../components/custom/logo-title";
import MessengerButton from "../components/custom/MessengerButton";

const scaledMargins = `
  margin: 4vw 4vw 0 0;
  @media only screen and (min-width: 600px) {
    margin: 2vw 2vw 0 0;
  }
`;

const loadFbLoginApi = () => {
  window.fbAsyncInit = function() {
      FB.init({
          appId: "324104641866796",
          cookie: true,  // enable cookies to allow the server to access
          // the session
          xfbml: true,  // parse social plugins on this page
          version: 'v2.5' // use version 2.1
      });
      console.log(FB);
      // TODO: after published
      FB.CustomerChat.show(true);
      FB.CustomerChat.showDialog();
  };

    // Load the SDK asynchronously
  (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  /*(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));*/
}

const IndexPage = () => {
  useEffect(() => {
    loadFbLoginApi();
  }, [])
  return (
    <Layout>
      <SEO title="Home" description={"We are a digital design agency located in Thunder Bay, ON focused on helping your business grow. We strive to give your business a competitive edge in the digital world."}/>
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
        <ContactHeader>Let's Talk</ContactHeader>
        <MessengerButton />
        <MessageLabel>Send us a message!</MessageLabel>
      </ContactContainer>
      <div 
        className="fb-customerchat"
        page_id="626503081171145"
        greeting_dialog_display="show" />
    </Layout>
  )
}

export default IndexPage
