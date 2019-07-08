import React, { useState } from "react";
import styled from "styled-components";
import * as theme from "../../utils/theme";
import validator from "validator";

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
    border: 1px solid ${theme.colors.lightTintColor};
    transition: all 0.2s ease;
    width: 100%;
    &:focus {
        outline: none;
        box-shadow: 0 2px 6px 0 rgba(0,0,0,0.2);
    }

    @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
        border: none;
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

    ${props => props.disabled && `
        box-shadow: 0 2px 6px 0 rgba(0,0,0,0.2);
        background-color: #888888;
        &:hover {
            transform: none;
        }
    `}
`;

const ErrorField = styled.span`
    color: ${theme.colors.darkTintColor};
    font-size: 12px;
`;

export default function ContactForm({customStyle}) {
    const [ errors, setErrors ] = useState({name: "", email: "", message: ""});
    const [ submitState, setSubmitState ] = useState("Nothing");
    const [ nameField, setNameField ] = useState("");
    const [ emailField, setEmailField ] = useState("");
    const [ messageField, setMessageField ] = useState("");

    function handleClick(e) {
        e.preventDefault();
        let newErrors = {};
        if (nameField.length === 0) {
            newErrors.name = "Can't be blank";
        }
        if (emailField.length === 0) {
            newErrors.email = "Can't be blank";
        }
        else if (!validator.isEmail(emailField)) {
            newErrors.email = "Invalid email";
        }
        if (messageField.length === 0) {
            newErrors.message = "Can't be blank";
        }
        if (newErrors.name || newErrors.email || newErrors.message) {
            setErrors(newErrors);
            return;
        }
        setErrors({name: "", email: "", message: ""});
        setSubmitState("Sending");
        fetch("https://www.kevinbai.design/api/email", {
            method: "POST",
            body: JSON.stringify({
                name: nameField,
                email: emailField,
                subject: "Bamboo Studios",
                message: messageField
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            if (res.status == 200) {
                setSubmitState("Sent");
            }
            else setSubmitState("Failed");
        }).catch(reason => setSubmitState("Failed"));
    }
    return (
        <Form customStyle={customStyle}>
            <Label gridArea="name-label">Name <ErrorField>{errors.name && `* ${errors.name}`}</ErrorField></Label>
            <Input type="text" placeholder="Name" gridArea="name-input" value={nameField} onChange={(e) => setNameField(e.target.value)}/>
            <Label gridArea="email-label">Email <ErrorField>{errors.email && `* ${errors.email}`}</ErrorField></Label>
            <Input type="text" placeholder="Email" gridArea="email-input" value={emailField} onChange={(e) => setEmailField(e.target.value)}/>
            <Label gridArea="message-label">Message <ErrorField>{errors.message && `* ${errors.message}`}</ErrorField></Label>
            <Input as="textarea" placeholder="Message" rows={5} gridArea={`message-input`} value={messageField} onChange={(e) => setMessageField(e.target.value)}/>
            <SubmitButton gridArea="submit" onClick={handleClick} disabled={submitState !== "Nothing"}>{submitState === "Sent" ? "Sent" : submitState === "Failed" ? "Failed" : submitState === "Sending" ? "Sending" : "Send"}</SubmitButton>
        </Form>
    )
}