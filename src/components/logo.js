import React from "react";
import styled from "styled-components";
import * as theme from "../utils/theme";
import logoImg from "../../assets/Logo@2x.png";
const Container = styled.div`
    display: flex;
`;

const TextElement = styled.span`
    font-size: 2vw;
    padding: 1vw 1.2vw;
    color: ${props => props.isLight ? theme.colors.lightColor : theme.colors.darkColor};
    border: 3px solid transparent;
`;

const BorderedElement = styled(TextElement)`
    border: 3px solid ${props => props.isLight ? theme.colors.lightColor : theme.colors.darkColor};
    border-radius: 0.5vw;
`;
const Image = styled.img`
    max-width: 60vw;
    max-height: 50vh;
    @media only screen and (min-width: 900px) {
        max-width: 40vw;
    }
`;

export default function Logo({isLight}) {
    return (
        /*<Container>
            <BorderedElement isLight={isLight}>Bamboo</BorderedElement>
            <TextElement isLight={isLight}>Studios.</TextElement>
        </Container>*/
        <Image src={logoImg}/>
    );
}