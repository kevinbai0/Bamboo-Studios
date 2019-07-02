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

export const Header = styled.h2`
    font-weight: 900;
`;