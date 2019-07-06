import React from "react";
import styled from "styled-components";
import * as theme from "../../utils/theme";
const Container = styled.div`
    display: flex;
    ${props => props.custom && props.custom}
`;

const TextElement = styled.span`
    padding: 20px 40px;
    font-size: 30px;
    color: ${props => props.isLight ? theme.colors.lightColor : theme.colors.darkColor};
    border: 3px solid transparent;
`;

const BorderedElement = styled(TextElement)`
    border: 3px solid ${props => props.isLight ? theme.colors.lightColor : theme.colors.darkColor};
    border-radius: 5px;
`;

export default function LogoTitleFixed({isLight, custom}) {
    return (
        <Container className={"logo-title"} custom={custom}>
            <BorderedElement isLight={isLight}>Bamboo</BorderedElement>
            <TextElement isLight={isLight}>Studios.</TextElement>
        </Container>
    );
}