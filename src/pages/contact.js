/*global google*/

import React, { useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import TemplatePage, { TemplateHeader, TemplateSubheader } from "../components/custom/TemplatePage";
import * as theme from "../utils/theme";
import MessengerButton from "../components/custom/MessengerButton";
import ContactForm from "../components/custom/ContactForm";
import { useStaticQuery, graphql } from "gatsby";
import { ContactContainerStyle, LocationImage, FindUsSection, AddressField, ContactField, ContactSymbol, ContactFormStyle, Map } from "../styled-components/contact-components";

const loadGoogleMaps = () => {
      // Load the SDK asynchronously
    window.initMap = () => {
        const location = { lat: 48.4203082, lng: -89.2605163 };
        const map = new google.maps.Map(document.getElementById('map'), {
            center: location,
            zoom: 13
        });
        new google.maps.Marker({position: location, map: map});
    }
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyA4asoWB_TboTAnOu2soncLr6mQWinr7UQ&callback=initMap";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'googlemaps'));
}

export default function ContactPage() {
    const data = useStaticQuery(graphql`
        query {
            image: file(relativePath: {  eq: "lakehead-building.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 750, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    
    useEffect(() => loadGoogleMaps(), []);

    return (
        <Layout>
            <SEO title="Contact" description="Let's talk! Send us a message on Facebook or shoot us an email. Let's make something awesome together!"/>
            <TemplatePage title="Contact" containerStyle={ContactContainerStyle}>
                <theme.ResponsiveHeader as={TemplateHeader} customStyle={`padding: 0 0 1vw; margin: auto auto 0`}>Message Us</theme.ResponsiveHeader>
                <MessengerButton customStyle={`display: inline-flex; margin: 0 0 4vw`}/>
                <theme.ResponsiveHeader percent={0.8} as={TemplateSubheader}>Or shoot us an email</theme.ResponsiveHeader>
                <ContactForm customStyle={ContactFormStyle} />
                <LocationImage fluid={data.image.childImageSharp.fluid}/>
                <FindUsSection>
                    <theme.ResponsiveHeader as={TemplateHeader}>Visit Us</theme.ResponsiveHeader>
                    <theme.ResponsiveHeader as={TemplateSubheader} percent={0.8} fontWeight={700}>Lakehead University CASES Building</theme.ResponsiveHeader>
                    <theme.ResponsiveText as={AddressField}>
                        <span>955 Oliver Road</span>
                        <span>Thunder Bay, ON P7B 5E1</span>
                    </theme.ResponsiveText>
                    <theme.ResponsiveText as={ContactField}>
                        <div>
                            <ContactSymbol>P</ContactSymbol>
                            <theme.StyledExternalLink href="tel:+18076334358">+1 (807) 633-4358</theme.StyledExternalLink>
                        </div>
                        <div>
                            <ContactSymbol>E</ContactSymbol>
                            <theme.StyledExternalLink href="mailto:kevinbai@bamboostudios.ca">kevinbai@bamboostudios.ca</theme.StyledExternalLink>
                        </div>
                    </theme.ResponsiveText>
                </FindUsSection>
                <Map id="map" />
            </TemplatePage>
        </Layout>
    );
}