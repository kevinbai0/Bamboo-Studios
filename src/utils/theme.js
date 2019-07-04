import styled from "styled-components";
import { Link } from "gatsby";

export const colors = {
    lightColor: "#F2E3D4",
    darkColor: "#3B1D00",
    tintColor: "#7B3C00"
}

export const StyledLink = styled(Link)`
    color: ${colors.darkColor};
    text-decoration: inherit;
    transition: all 0.2s ease;
    &:hover, &:active {
        opacity: 0.5;
    }
`;

export const Tagline = styled.h1`
    line-height: 1.3;
    font-weight: 900;
    color: ${colors.darkColor};
`;

export const ResponsiveHeader = styled.h2`
    font-weight: 900;
    font-size: 5vw;
    @media only screen and (min-width: 450px) {
        font-size: 4vw;
    }
    @media only screen and (min-width: 900px) {
        font-size: calc(12px + 2vw);
    }
`;

export const ResponsiveText = styled.span`
    font-size: ${props => ((props.baseSize || 18) * 0.2)}vw;
    @media only screen and (min-width: 450px) {
        font-size: ${props => ((props.baseSize || 18) * 0.15)}vw;
    }
    @media only screen and (min-width: 600px) {
        font-size: ${props => ((props.baseSize || 18) * 0.125)}vw;
    }
    @media only screen and (min-width: 900px) {
        font-size: ${props => ((props.baseSize || 18) * 0.1)}vw;
    }
    @media only screen and (min-width: 1280px) {
        font-size: ${props => ((props.baseSize || 18) * 0.08)}vw;
    }
`;