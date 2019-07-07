import React from "react";
import styled from "styled-components";
import * as theme from "../../utils/theme";
import DefaultButton from "../default-button";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
        display: grid;
        grid-template-rows: repeat(5, auto);
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 
            "name-label email-label"
            "name-input email-input"
            "message-label message-label"
            "message-input message-input"
            "submit ."
        ;
        grid-column-gap: 2vw;
    }

    ${props => props.customStyle && props.customStyle};
`;

const Label = styled.label`
    font-weight: 700;
    color: ${theme.colors.darkColor};
    padding: 5vw 0 1vw 0;

    ${props => props.gridArea && `grid-area: ${props.gridArea}`};

    @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
        padding: 2vw 0.5vw;
    }
    @media only screen and (min-width: 900px) {
        padding: 2vw 0.5vw 0.5vw;
    }
`;

const Input = styled.input`
    background-color: ${theme.colors.lightColor};
    border-radius: 1vw;
    box-shadow: 0 2px 18px 0 rgba(0,0,0,0.2);
    color: ${theme.colors.darkTintColor};
    padding: 2vw 3vw;
    border: none;
    transition: all 0.2s ease;
    width: 100%;
    &:focus {
        outline: none;
        box-shadow: 0 2px 6px 0 rgba(0,0,0,0.2);
    }

    @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
        padding: 1vw 1.5vw;
    }
    @media only screen and (min-width: 900px) {
        border-radius: 5px;
        padding: 0.5vw 0.75vw;
    }
    ${props => props.gridArea && `grid-area: ${props.gridArea}`};
`;

const SubmitButton = styled.button`
    background-color: ${theme.colors.darkTintColor};
    color: ${theme.colors.lightColor};
    align-self: flex-start;
    justify-self: start;
    padding: 1.5vw 2.5vw;
    border-radius: 10vw;
    margin: 4vw 0 0;
    box-shadow: 0 2px 18px 0 rgba(0,0,0,0.2);
    transition: all 0.2s ease;
    cursor: pointer;
    &:hover {
        transform: scale(1.05);
    }
    &:focus {
        outline: none;
    }
    @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
        padding: 0.5vw 2.5vw;
        margin: 2vw 0 0;
    }
`;


export default function ContactForm({customStyle}) {
    return (
        <Form customStyle={customStyle}>
            <Label gridArea="name-label">Name</Label>
            <Input type="text" placeholder="Name" gridArea="name-input"/>
            <Label gridArea="email-label">Email</Label>
            <Input type="text" placeholder="Email" gridArea="email-input"/>
            <Label gridArea="message-label">Message</Label>
            <Input as="textarea" placeholder="Message" rows={5} gridArea={`message-input`} />
            <SubmitButton gridArea="submit">Send</SubmitButton>
        </Form>
    )
}