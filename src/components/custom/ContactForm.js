import React from "react";
import styled from "styled-components";
import * as theme from "../../utils/theme";
import DefaultButton from "../default-button";

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    font-weight: 700;
    color: ${theme.colors.darkColor};
    padding: 5vw 0 1vw 0;
`;

const Input = styled.input`
    background-color: ${theme.colors.lightColor};
    border-radius: 1vw;
    box-shadow: 0 2px 18px 0 rgba(0,0,0,0.2);
    color: ${theme.colors.tintColor};
    padding: 2vw 3vw;
    border: none;
    transition: all 0.2s ease;
    &:focus {
        outline: none;
        box-shadow: 0 2px 6px 0 rgba(0,0,0,0.2);
    }
`;

const SubmitButton = styled.button`
    background-color: ${theme.colors.tintColor};
    color: ${theme.colors.lightColor};
    align-self: flex-start;
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
`;


export default function ContactForm() {
    return (
        <Form>
            <Label >Name</Label>
            <Input type="text" placeholder="Name" />
            <Label>Email</Label>
            <Input type="text" placeholder="Email" />
            <Label>Message</Label>
            <Input as="textarea" placeholder="Message" rows={5} />
            <SubmitButton>Submit</SubmitButton>
        </Form>
    )
}