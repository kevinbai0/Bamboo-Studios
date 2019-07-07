import styled from "styled-components";
import Img from "gatsby-image";
import * as theme from "../utils/theme";

export const ContactContainerStyle = `
    @media only screen and (min-width: 900px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: start;
        grid-column-gap: 5vw;
        * {
            grid-column: 1/2;
        }
        margin: 0 5vw 0 0;
    }
`;

export const LocationImage = styled(Img)`
    margin: 0 -5vw;
    height: 50vw;
    object-fit: cover;
    object-position: center;

    @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
        margin: 0;
        border-radius: 5px;
        width: 60vw;
    }
    @media only screen and (min-width: 900px) {
        width: 100%;
        height: 100%;
        grid-column: 2/3;
        grid-row: 2/5;
    }
`;

export const FindUsSection = styled.section`
    line-height: 1.5;
    @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
        width: 60vw;
    }
    @media only screen and (min-width: 900px) {
        width: auto;
    }
`;

export const FindUsHeaderStyle = `
    margin: 10vw 0 1vw 0;
    margin-top: 10vw;
`;

export const ContactFormStyle = `
    @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
        width: 60vw;
    }
    @media only screen and (min-width: 900px) {
        width: 35vw;
        display: inline-grid;
        margin-bottom: 0;
    }
`;

export const AddressField = styled.div`
    color: ${theme.colors.darkColor};
    margin: 2vw 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const ContactField = styled.div`
    margin: 2vw 0 0;
    color: ${theme.colors.darkColor};
`;

export const ContactSymbol = styled.span`
    font-weight: 700;
    color: ${theme.colors.darkTintColor};
    margin: 0 3vw 0 0;
`;