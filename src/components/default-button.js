import React from "react";
import styled from "styled-components";
import { ResponsiveText } from "../utils/theme";

const Container = styled.div`
    display: inline;
    ${props => props.backgroundColor && `
        background-color: ${props.backgroundColor};
    `}
    ${props => props.custom && props.custom}
    padding: 1vw 2vw;
    border-radius: 10vw;
    cursor: pointer;
    box-shadow: 0 2px 16px 0 rgba(0,0,0,0.2);
    transition: all 0.2s ease;
    &:hover {
        transform: scale(1.02);
    }
`;

const Label = styled(ResponsiveText)`
    ${props => props.color && `
        color: ${props.color};
    `}
`;

export default function DefaultButton({text, color, backgroundColor, custom}) {
    return (
        <Container backgroundColor={backgroundColor} custom={custom}>
            <Label color={color}>{text}</Label>
        </Container>
    )
}