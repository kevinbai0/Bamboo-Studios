import React from "react";
import styled from "styled-components";
import * as theme from "../../utils/theme";

const Page = styled.div`
    padding: 35vw 5vw 10vw;
    @media only screen and (min-width: 600px) {
        padding: 25vw 5vw 10vw;
    }
    @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
        padding: 10vw 0 5vw 20vw;
    }
    @media only screen and (min-width: 1200px) {
        padding: 5vw 0 5vw 20vw;
    }
`;

const Title = styled.h1`
    display: none;
    @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
        display: block;
        top: 0;
        left: 2vw;
        position: absolute;
        color: ${theme.colors.tintColor};
        font-weight: 900;
        font-size: 12vw;
        transform-origin: left bottom;
        transform: rotate(90deg) translateX(1vw);
    }
`;

export const TemplateHeader = styled.h2`
    color: ${theme.colors.darkColor};
    font-weight: 900;
    margin: 8vw 0 auto;
    padding: 0 0 2vw 0;
`;

export const TemplateSubheader = styled.h3`
    color: ${theme.colors.darkColor};
    font-weight: ${props => props.fontWeight || 800};
    margin: 1vw 0 0;
    @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
        margin: 0;
    }
`;

const Container = styled.div`
    ${props => props.custom && props.custom};
`;

export default function TemplatePage({title, children, containerStyle}) {
    return (
        <Page>
            <Title>{title}</Title>
            <Container custom={containerStyle}>
                {children}
            </Container>
        </Page>
    )
}