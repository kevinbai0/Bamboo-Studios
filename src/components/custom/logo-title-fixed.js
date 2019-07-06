import React from "react";
import styled from "styled-components";
import * as theme from "../../utils/theme";
const Container = styled.div`
    display: flex;
    ${props => props.custom && props.custom}
`;

const TextElement = styled.span`
    padding: ${props => props.percent ? (props.percent * 10) + "px " + (props.percent * 20) + "px" : "10px 20px" };
    font-size: ${props => props.percent ? props.percent * 30 : 30}px;
    color: ${props => props.isLight ? theme.colors.lightColor : theme.colors.darkColor};
    border: 3px solid transparent;
`;

const BorderedElement = styled(TextElement)`
    border: 3px solid ${props => props.isLight ? theme.colors.lightColor : theme.colors.darkColor};
    border-radius: 5px;
`;

export default function LogoTitleFixed({isLight, custom, percent}) {
    return (
        <Container className={"logo-title"} custom={custom}>
            <BorderedElement isLight={isLight} percent={percent}>Bamboo</BorderedElement>
            <TextElement isLight={isLight} percent={percent}>Studios.</TextElement>
        </Container>
    );
}