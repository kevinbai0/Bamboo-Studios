import React from "react";
import styled from "styled-components";
import * as theme from "../../utils/theme";

const Container = styled.div`
    background-color: ${theme.colors.tintColor};
    border-radius: 1vw;
    padding: 2.5vw;
    cursor: pointer;
    margin: ${props => props.margin || 0 };
    transition: all 0.2s ease;
    box-shadow: 0 2px 16px 0 rgba(0,0,0,0.2);
    &:hover {
        transform: scale(1.02);
    }
`;

const Label = styled(theme.ResponsiveText)`
    color: ${theme.colors.lightColor};
    font-weight: 700;
`;

export default function LabelButton({text, margin}) {
    return (
        <Container margin={margin}>
            <Label>{text && text}</Label>
        </Container>
    );
}