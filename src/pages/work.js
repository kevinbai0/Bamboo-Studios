import React from "react";
import styled from "styled-components";
import * as theme from "../utils/theme";
import Layout from "../components/layout";
import SEO from "../components/seo";
import TemplatePage, { TemplateHeader, TemplateSubheader } from "../components/custom/TemplatePage";

const WorkContainerStyle = `
    height: 100vh;
`;

const MessageLabel = styled.div`
    width: 100%;
    @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
        width: 60vw;
    }
    max-width: 700px;
    font-weight: 400;
    color: ${theme.colors.darkColor};
    line-height: 1.5;
`

export default function Work() {
    return (
        <Layout>
            <SEO title="Work"/>
            <TemplatePage title="Work" containerStyle={WorkContainerStyle}>
                <TemplateHeader as={theme.ResponsiveHeader}>Coming Soon</TemplateHeader>
                <MessageLabel as={theme.FluidText} percent={0.8}>
                    We're working hard to finish work for our first few clients! Our new work will be published as soon as we finish!
                </MessageLabel>
            </TemplatePage>
        </Layout>
    )
}