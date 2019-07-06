import styled from "styled-components";
import Img from "gatsby-image";
import * as theme from "../utils/theme";

export const LocationImage = styled(Img)`
    margin: 0 -5vw;
    height: 50vw;
    object-fit: cover;
    object-position: center;
`;

export const FindUsSection = styled.section`
    line-height: 1.5;
`;

export const FindUsHeaderStyle = `
    margin: 10vw 0 1vw 0;
    margin-top: 10vw;
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
    color: ${theme.colors.tintColor};
    margin: 0 3vw 0 0;
`;