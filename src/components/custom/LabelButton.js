import React from "react";
import styled from "styled-components";
import * as theme from "../../utils/theme";

const Container = styled.div`
    background-color: ${theme.colors.darkTintColor};
    border-radius: 1vw;
    padding: 2.5vw;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 16px 0 rgba(0,0,0,0.2);
    &:hover {
        transform: scale(1.02);
    }
    ${props => props.custom && props.custom};
`;

const Label = styled(theme.ResponsiveText)`
    color: ${theme.colors.lightColor};
    font-weight: 700;
`;

export default function LabelButton({text, custom}) {
    return (
        <Container custom={custom}>
            <Label>{text && text}</Label>
        </Container>
    );
}