import styled from "styled-components";
import * as theme from "../utils/theme";
export const AboutContainer = styled.div`
`;

export const AboutParagraph = styled.p`
    color: ${theme.colors.darkColor};
    width: 100%;
    line-height: 1.33;

    @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
        width: 60vw;
        max-width: 700px;
    }
`;

export const TeamMembers = styled.div`
    display: grid;
    grid-auto-columns: 50vw;
    @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
        grid-auto-columns: 25vw;
    }
`;
