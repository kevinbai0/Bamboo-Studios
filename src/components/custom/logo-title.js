import React from "react";
import styled from "styled-components";
import * as theme from "../../utils/theme";
const Container = styled.div`
    display: flex;
    ${props => props.custom && props.custom}
`;

const TextElement = styled.span`
    padding: 2vw 4vw;
    font-size: 7vw;
    color: ${props => props.isLight ? theme.colors.lightColor : theme.colors.darkColor};
    border: 3px solid transparent;
    @media only screen and (min-width: 600px) {
        padding: 2.5vw 3vw;
        font-size: 4vw;
    }
    @media only screen and (min-width: 900px) {
        padding: 2.5vw 2.2vw;
        font-size: 4vw;
    }
`;

const BorderedElement = styled(TextElement)`
    border: 3px solid ${props => props.isLight ? theme.colors.lightColor : theme.colors.darkColor};
    border-radius: 1vw;
    @media only screen and (min-width: 600px) {
        border-radius: 0.75vw;
    }
    @media only screen and (min-width: 900px) {
        border-radius: 0.5vw;
    }
`;

export default function LogoTitle({isLight, custom}) {
    return (
        <Container className={"logo-title"} custom={custom}>
            <BorderedElement isLight={isLight}>Bamboo</BorderedElement>
            <TextElement isLight={isLight}>Studios.</TextElement>
        </Container>
    );
}