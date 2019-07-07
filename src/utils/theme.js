import styled from "styled-components";
import { Link } from "gatsby";

/**
 * Responsive: resizes dynamically based on screen width
 * Fluid: size stays the same, text wraps instead, uses some queries
 */

export const mobileSwitchWidth = 750;

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

export const StyledExternalLink = styled.a`
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
    font-size: ${props => props.percent ? props.percent * 24 : 24}px;
    @media only screen and (min-width: 450px) {
        font-size: ${props => props.percent ? props.percent * 5 : 5}vw;
    }
    @media only screen and (min-width: 900px) {
        font-size: calc(12px + ${props => props.percent ? props.percent * 2 : 2}vw);
    }
    ${props => props.customStyle && props.customStyle};
`;

export const ResponsiveText = styled.span`
    font-size: ${props => (props.baseSize || 16)}px;
    @media only screen and (min-width: 450px) {
        font-size: ${props => ((props.baseSize || 18) * 0.18)}vw;
    }
    @media only screen and (min-width: 600px) {
        font-size: ${props => ((props.baseSize || 18) * 0.14)}vw;
    }
    @media only screen and (min-width: 900px) {
        font-size: ${props => ((props.baseSize || 18) * 0.1)}vw;
    }
    @media only screen and (min-width: 1280px) {
        font-size: ${props => ((props.baseSize || 18) * 0.08)}vw;
    }
`;

export const FluidText = styled.p`
    font-size: 18px;

    @media only screen and (min-width: ${mobileSwitchWidth}px) {
        font-size: 24px;
`;